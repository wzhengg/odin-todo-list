import PubSub from 'pubsub-js';
import { ADD_PROJECT, CLICK_REMOVE_PROJECT, CLICK_NEW_PROJECT, PROJECT_NAME_EXISTS, REMOVE_PROJECT} from './topics';
import Project from './project';

const projects = [];

function init() {
    const defaultProject = new Project('All todos');
    add(defaultProject);

    PubSub.subscribe(CLICK_NEW_PROJECT, create);
    PubSub.subscribe(CLICK_REMOVE_PROJECT, remove);
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

function remove(topic, name) {
    const i = projects.findIndex(proj => proj.name === name);
    projects.splice(i, 1);
    PubSub.publish(REMOVE_PROJECT, name);
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