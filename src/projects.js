import PubSub from 'pubsub-js';
import { NEW_PROJECT } from './topics';
import Project from './project';

const projects = [];

export function initProjects() {
    const defaultProject = new Project('Default');
    add(defaultProject);
}

export function getProjects() {
    return projects;
}

export function add(project) {
    projects.push(project);
    PubSub.publish(NEW_PROJECT, project);
}

export function remove(index) {
    projects.splice(index, 1);
}