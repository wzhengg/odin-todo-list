import PubSub from 'pubsub-js';
import { ADD_PROJECT, ADD_TODO, CLICK_CREATE_PROJECT, CLICK_CREATE_TODO, CLICK_PROJECT_LABEL, CLICK_REMOVE_PROJECT, PROJECT_NAME_EXISTS, REMOVE_PROJECT, SELECT_PROJECT } from './topics';
import Project from './project';
import Todo from './todo';

const projects = [];
let selectedProject;

function init() {
    const defaultProject = new Project('All todos');
    addProject(defaultProject);
    selectProject(CLICK_PROJECT_LABEL, defaultProject.name);

    PubSub.subscribe(CLICK_CREATE_PROJECT, createProject);
    PubSub.subscribe(CLICK_REMOVE_PROJECT, removeProject);
    PubSub.subscribe(CLICK_PROJECT_LABEL, selectProject);
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
    selectProject(CLICK_PROJECT_LABEL, project.name);
}

function removeProject(topic, name) {
    const i = projects.findIndex(proj => proj.name === name);
    const removed = projects.splice(i, 1);
    PubSub.publish(REMOVE_PROJECT, name);

    if (removed[0].name === name && projects.length !== 0) {
        selectProject(CLICK_PROJECT_LABEL, projects[0].name);
    }
}

function selectProject(topic, name) {
    const i = projects.findIndex(proj => proj.name === name);
    selectedProject = projects[i];
    PubSub.publish(SELECT_PROJECT, selectedProject);
}

function createTodo(topic, name) {
    const todo = new Todo(name, '', '', '');
    addTodo(todo);
}

function addTodo(todo) {
    selectedProject.add(todo);
    PubSub.publish(ADD_TODO, { todo: todo, project: selectedProject });
}

export { init as initProjects };