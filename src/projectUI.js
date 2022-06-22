import PubSub from 'pubsub-js';
import { ADD_PROJECT, ADD_TODO, CLICK_CREATE_TODO, REMOVE_PROJECT, SELECT_PROJECT } from './topics';
import { projectTitleDiv, todosDiv, createTodoButton } from './dom';

const projectContainers = [];

function init() {
    PubSub.subscribe(ADD_PROJECT, createProjectContainer);
    PubSub.subscribe(SELECT_PROJECT, renderProject);
    PubSub.subscribe(REMOVE_PROJECT, removeContainer);
    PubSub.subscribe(ADD_TODO, renderTodo);

    renderTitle();
    bindCreateTodoButton();
}

function renderTitle() {
    const title = document.createElement('div');
    title.textContent = 'All todos';
    projectTitleDiv.appendChild(title);
}

function bindCreateTodoButton() {
    createTodoButton.addEventListener('click', promptTodoName);
}

function promptTodoName() {
    let name;

    do {
        name = prompt('Name of todo:');

        if (name === null) {
            return;
        }
    } while (name === '');

    PubSub.publish(CLICK_CREATE_TODO, name);
}

function createProjectContainer(topic, project) {
    const projectContainer = document.createElement('div');
    projectContainer.setAttribute('data-name', project.name);
    projectContainers.push(projectContainer);
    projectContainers.forEach(p => console.log(p.dataset.name)); // DEBUG
}

function renderProject(topic, project) {
    clearProjectContainer();
    const projectDiv = getProjectDiv(project.name);
    todosDiv.appendChild(projectDiv);
}

function clearProjectContainer() {
    const currentProjectDiv = todosDiv.querySelector('div');
    if (currentProjectDiv === null) {
        return;
    }
    todosDiv.removeChild(currentProjectDiv);
}

function getProjectDiv(name) {
    return projectContainers.find(container => container.dataset.name === name);
}

function removeContainer(topic, name) {
    const i = projectContainers.findIndex(p => p.dataset.name === name);
    projectContainers.splice(i, 1);
    projectContainers.forEach(p => console.log(p.dataset.name)); // DEBUG
}

function renderTodo(topic, todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Fill later
    const img = new Image();
    img.src = '';
    img.alt = '';

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('name');
    todoTitle.textContent = todo.title;

    // Fill later
    const date = document.createElement('div');
    date.classList.add('date');
    date.textContent = '6/21';

    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    spacer.textContent = ' ';

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.textContent = 'E';

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'X';

    todoDiv.append(img, todoTitle, date, spacer, editButton, removeButton);
    todosDiv.appendChild(todoDiv);
}

export { init as initProjectUI };