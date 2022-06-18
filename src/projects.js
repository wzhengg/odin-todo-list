import PubSub from 'pubsub-js';
import { ADD_PROJECT, CLICK_NEW_PROJECT } from './topics';
import Project from './project';

const projects = [];

function init() {
    const defaultProject = new Project('All todos');
    add(defaultProject);

    PubSub.subscribe(CLICK_NEW_PROJECT, create);
}

function create(topic, name) {
    const project = new Project(name);
    add(project);
}

function add(project) {
    projects.push(project);
    PubSub.publish(ADD_PROJECT, project);
}

function remove(index) {
    projects.splice(index, 1);
}

export { init as initProjects };