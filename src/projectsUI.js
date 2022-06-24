import PubSub from 'pubsub-js';
import {
    ADD_PROJECT, CLICK_CREATE_PROJECT, CLICK_PROJECT_LABEL,
    CLICK_REMOVE_PROJECT, PROJECT_NAME_EXISTS, REMOVE_PROJECT
} from './topics';
import { projectsDiv, createProjectButton } from './dom';

function init() {
    PubSub.subscribe(ADD_PROJECT, render);
    PubSub.subscribe(PROJECT_NAME_EXISTS, alertNameExists);
    PubSub.subscribe(REMOVE_PROJECT, remove);
    
    bindCreateProjectButton();
}

function bindCreateProjectButton() {
    createProjectButton.addEventListener('click', promptProjectName);
}

function promptProjectName() {
    let name;
    
    do {
        name = prompt('Name of project:');

        if (name === null) {
            return;
        }
    } while (name === '');

    PubSub.publish(CLICK_CREATE_PROJECT, name);
}

function render(topic, project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.dataset.id = project.id;
    projectDiv.addEventListener('click', publishClickedProject);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = project.name;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', publishRemove);

    projectDiv.append(nameDiv, removeButton);
    projectsDiv.appendChild(projectDiv);
}

function publishClickedProject(e) {
    if (e.target.type === 'button') {
        return;
    }

    let project = e.target;
    if (project.classList.contains('name')) {
        project = project.parentNode;
    }

    PubSub.publish(CLICK_PROJECT_LABEL, project.dataset.id);
}

function publishRemove(e) {
    const parent = e.target.parentNode;
    PubSub.publish(CLICK_REMOVE_PROJECT, parent.dataset.id);
}

function alertNameExists(topic, name) {
    alert(`A project with the name "${name}" already exists.`);
}

function remove(topic, project) {
    const label = projectsDiv.querySelector(`[data-id="${project.id}"]`)
    projectsDiv.removeChild(label);
}

export { init as initProjectsUI };