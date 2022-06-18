import PubSub from 'pubsub-js';
import { ADD_PROJECT, CLICK_NEW_PROJECT } from './topics';
import { projects, newProjectButton } from './dom';

function init() {
    PubSub.subscribe(ADD_PROJECT, render);
    
    bindPlusButton();
}

function render(topic, project) {
    const projectLabel = document.createElement('div');
    projectLabel.classList.add('project');
    projectLabel.textContent = project.name;
    projects.appendChild(projectLabel);
}

function bindPlusButton() {
    newProjectButton.addEventListener('click', promptProjectName);
}

function promptProjectName() {
    const projectName = prompt('Name:');
    PubSub.publish(CLICK_NEW_PROJECT, projectName);
}

export { init as initProjectsUI };