import PubSub from 'pubsub-js';
import { ADD_PROJECT, CLICK_CREATE_PROJECT, CLICK_REMOVE_PROJECT, PROJECT_NAME_EXISTS, REMOVE_PROJECT } from './topics';
import { projectsDiv, createProjectButton } from './dom';

function init() {
    bindCreateProjectButton();

    PubSub.subscribe(ADD_PROJECT, render);
    PubSub.subscribe(PROJECT_NAME_EXISTS, alertNameExists);
    PubSub.subscribe(REMOVE_PROJECT, remove);
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
    projectDiv.setAttribute('data-name', project.name);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = project.name;

    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', publishRemove);

    projectDiv.appendChild(nameDiv);
    projectDiv.appendChild(removeButton);

    projectsDiv.appendChild(projectDiv);
}

function publishRemove(e) {
    const parentDiv = e.target.parentNode;
    const name = parentDiv.dataset.name;
    PubSub.publish(CLICK_REMOVE_PROJECT, name);
}

function remove(topic, name) {
    const label = projectsDiv.querySelector(`[data-name="${name}"]`)
    projectsDiv.removeChild(label);
}

function alertNameExists(topic, name) {
    alert(`A project with the name "${name}" already exists.`);
}

export { init as initProjectsUI };