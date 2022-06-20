import PubSub from 'pubsub-js';
import { ADD_PROJECT, CLICK_REMOVE_PROJECT, CLICK_NEW_PROJECT, PROJECT_NAME_EXISTS, REMOVE_PROJECT } from './topics';
import { projectsDiv, addProjectButton } from './dom';

function init() {
    bindPlusButton();

    PubSub.subscribe(ADD_PROJECT, render);
    PubSub.subscribe(PROJECT_NAME_EXISTS, alertNameExists);
    PubSub.subscribe(REMOVE_PROJECT, remove);
}

function bindPlusButton() {
    addProjectButton.addEventListener('click', promptProjectName);
}

function promptProjectName() {
    let name;
    
    do {
        name = prompt('Name of project:');

        if (name === null) {
            return;
        }
    } while (name === '');

    PubSub.publish(CLICK_NEW_PROJECT, name);
}

function render(topic, project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('data-name', project.name);

    const projectName = document.createElement('div');
    projectName.classList.add('name');
    projectName.textContent = project.name;

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', publishRemove);

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(deleteButton);
    projectsDiv.appendChild(projectDiv);
}

function publishRemove(e) {
    const parentDiv = e.target.parentNode;
    const projectName = parentDiv.dataset.name;
    PubSub.publish(CLICK_REMOVE_PROJECT, projectName);
}

function remove(topic, name) {
    const label = projectsDiv.querySelector(`[data-name="${name}"]`)
    projectsDiv.removeChild(label);
}

function alertNameExists(topic, name) {
    alert(`A project with the name "${name}" already exists.`);
}

export { init as initProjectsUI };