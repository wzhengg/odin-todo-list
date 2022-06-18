import PubSub from 'pubsub-js';
import { ADD_PROJECT, CLICK_NEW_PROJECT } from './topics';
import { projectsContainer, addProjectButton } from './dom';

function init() {
    bindPlusButton();

    PubSub.subscribe(ADD_PROJECT, render);
}

function render(topic, project) {
    const projectLabel = document.createElement('div');
    projectLabel.classList.add('project');
    projectLabel.textContent = project.name;
    projectsContainer.appendChild(projectLabel);
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

export { init as initProjectsUI };