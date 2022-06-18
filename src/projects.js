import PubSub from 'pubsub-js';
import { ADD_PROJECT, CLICK_NEW_PROJECT, PROJECT_NAME_EXISTS } from './topics';
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
    if (exists(project.name)) {
        PubSub.publish(PROJECT_NAME_EXISTS, project.name);
        return;
    }

    projects.push(project);
    PubSub.publish(ADD_PROJECT, project);
}

function remove(index) {
    projects.splice(index, 1);
}

function exists(name) {
    for (const project of projects) {
        if (project.name === name) {
            return true;
        }
    }
    return false;
}

export { init as initProjects };