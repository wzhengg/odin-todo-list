import PubSub from 'pubsub-js';
import { ADD_PROJECT, CLICK_CREATE_PROJECT, CLICK_REMOVE_PROJECT, PROJECT_NAME_EXISTS, REMOVE_PROJECT } from './topics';
import Project from './project';

const projects = [];

function init() {
    const defaultProject = new Project('All todos');
    add(defaultProject);

    PubSub.subscribe(CLICK_CREATE_PROJECT, create);
    PubSub.subscribe(CLICK_REMOVE_PROJECT, remove);
}

function create(topic, name) {
    if (exists(name)) {
        PubSub.publish(PROJECT_NAME_EXISTS, name);
        return;
    }
    const project = new Project(name);
    add(project);
}

function exists(name) {
    for (const proj of projects) {
        if (proj.name === name) {
            return true;
        }
    }
    return false;
}

function add(project) {
    projects.push(project);
    PubSub.publish(ADD_PROJECT, project);
}

function remove(topic, name) {
    const i = projects.findIndex(proj => proj.name === name);
    projects.splice(i, 1);
    PubSub.publish(REMOVE_PROJECT, name);
}

export { init as initProjects };