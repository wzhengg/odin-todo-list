import PubSub from 'pubsub-js';
import { ADD_PROJECT, ADD_TODO, CLICK_CREATE_PROJECT, CLICK_CREATE_TODO, CLICK_REMOVE_PROJECT, PROJECT_NAME_EXISTS, REMOVE_PROJECT } from './topics';
import Project from './project';
import Todo from './todo';

const projects = [];

function init() {
    const defaultProject = new Project('All todos');
    addProject(defaultProject);

    PubSub.subscribe(CLICK_CREATE_PROJECT, createProject);
    PubSub.subscribe(CLICK_REMOVE_PROJECT, removeProject);
    PubSub.subscribe(CLICK_CREATE_TODO, createTodo);
}

function createProject(topic, name) {
    if (projectExists(name)) {
        PubSub.publish(PROJECT_NAME_EXISTS, name);
        return;
    }
    const project = new Project(name);
    addProject(project);
}

function projectExists(name) {
    for (const proj of projects) {
        if (proj.name === name) {
            return true;
        }
    }
    return false;
}

function addProject(project) {
    projects.push(project);
    PubSub.publish(ADD_PROJECT, project);
}

function removeProject(topic, name) {
    const i = projects.findIndex(proj => proj.name === name);
    projects.splice(i, 1);
    PubSub.publish(REMOVE_PROJECT, name);
}

function createTodo(topic, name) {
    const todo = new Todo(name, '', '', '');
    addTodo(todo);
}

function addTodo(todo) {
    projects[0].add(todo);
    PubSub.publish(ADD_TODO, todo);
}

export { init as initProjects };