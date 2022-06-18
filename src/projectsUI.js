import PubSub from 'pubsub-js';
import { NEW_PROJECT } from './topics';
import { projects } from './dom';

export default function init() {
    PubSub.subscribe(NEW_PROJECT, render);
}

function render(topic, project) {
    const projectLabel = document.createElement('div');
    projectLabel.classList.add('project');
    projectLabel.textContent = project.name;
    projects.appendChild(projectLabel);
}