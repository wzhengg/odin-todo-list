import PubSub from 'pubsub-js';
import {
    ADD_PROJECT, ADD_TODO, CLICK_CREATE_PROJECT, CLICK_CREATE_TODO,
    CLICK_PROJECT_LABEL, CLICK_REMOVE_PROJECT, CLICK_REMOVE_TODO, EMPTY_MSG,
    PROJECT_NAME_EXISTS, REMOVE_PROJECT, REMOVE_TODO, SELECT_PROJECT
} from './topics';
import Project from './project';
import Todo from './todo';

const projects = [];
let selectedProject;

function init() {
    PubSub.subscribe(CLICK_CREATE_PROJECT, createProject);
    PubSub.subscribe(CLICK_REMOVE_PROJECT, removeProject);
    PubSub.subscribe(CLICK_PROJECT_LABEL, selectProject);
    PubSub.subscribe(CLICK_CREATE_TODO, createTodo);
    PubSub.subscribe(CLICK_REMOVE_TODO, removeTodo);

    createProject(EMPTY_MSG, 'All todos');
}

function createProject(topic, name) {
    if (projectExists(name)) {
        PubSub.publish(PROJECT_NAME_EXISTS, name);
        return;
    }
    
    const project = new Project(name, self.crypto.randomUUID());
    addProject(project);
    selectProject(EMPTY_MSG, project.id);
}

function projectExists(name) {
    const project = projects.find(obj => obj.name === name);
    return project !== undefined;
}

function addProject(project) {
    projects.push(project);
    PubSub.publish(ADD_PROJECT, project);
    selectProject(EMPTY_MSG, project.id);
}

function removeProject(topic, id) {
    const i = projects.findIndex(obj => obj.id === id);
    const removed = projects.splice(i, 1).at(0);
    PubSub.publish(REMOVE_PROJECT, removed);

    if (removed.id === selectedProject.id && projects.length > 0) {
        selectProject(EMPTY_MSG, projects[0].id);
    }
}

function selectProject(topic, id) {
    selectedProject = projects.find(obj => obj.id === id);
    PubSub.publish(SELECT_PROJECT, selectedProject);
}

function createTodo(topic, data) {
    const todo = new Todo(data.name, data.desc, data.date, data.priority, self.crypto.randomUUID());
    // console.log(todo);
    addTodo(todo);
}

function addTodo(todo) {
    selectedProject.add(todo);
    PubSub.publish(ADD_TODO, { todo: todo, project: selectedProject });
}

function removeTodo(topic, id) {
    const removed = selectedProject.remove(id);
    PubSub.publish(REMOVE_TODO, removed);
}

export { init as initProjects };