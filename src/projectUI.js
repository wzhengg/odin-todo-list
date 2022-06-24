import PubSub from 'pubsub-js';
import {
    ADD_PROJECT, ADD_TODO, CLICK_CREATE_TODO, CLICK_REMOVE_TODO,
    REMOVE_PROJECT, REMOVE_TODO, SELECT_PROJECT
} from './topics';
import { projectTitleDiv, todosDiv, createTodoButton } from './dom';

const projectContainers = [];

function init() {
    PubSub.subscribe(ADD_PROJECT, createProjectContainer);
    PubSub.subscribe(SELECT_PROJECT, updateTitle);
    PubSub.subscribe(SELECT_PROJECT, renderProject);
    PubSub.subscribe(REMOVE_PROJECT, removeContainer);
    PubSub.subscribe(ADD_TODO, renderTodo);
    PubSub.subscribe(REMOVE_TODO, removeTodo);

    createTitle();
    bindCreateTodoButton();
}

function createTitle() {
    const title = document.createElement('div');
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
    projectContainer.dataset.id = project.id;
    projectContainers.push(projectContainer);
    createTodoButton.style.display = 'block';
}

function updateTitle(topic, project) {
    const title = projectTitleDiv.querySelector('div');
    title.textContent = project.name;
}

function renderProject(topic, project) {
    clearProjectContainer();
    const projectDiv = projectContainers.find(obj => obj.dataset.id === project.id);
    todosDiv.appendChild(projectDiv);
}

function clearProjectContainer() {
    const currentProject = todosDiv.querySelector('div');

    if (currentProject === null) {
        return;
    }

    todosDiv.removeChild(currentProject);
}

function removeContainer(topic, project) {
    const i = projectContainers.findIndex(obj => obj.dataset.id === project.id);
    projectContainers.splice(i, 1);

    if (projectContainers.length === 0) {
        clearProjectContainer();
        createTodoButton.style.display = 'none';

        const title = projectTitleDiv.querySelector('div');
        title.textContent = 'Create a project to add todos';
    }
}

function renderTodo(topic, data) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.dataset.id = data.todo.id;

    // Fill later
    const img = new Image();
    img.src = '';
    img.alt = '';

    const todoName = document.createElement('div');
    todoName.classList.add('name');
    todoName.textContent = data.todo.name;

    // Fill later
    const date = document.createElement('div');
    date.classList.add('date');
    date.textContent = '6/21';

    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    spacer.textContent = ' ';

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.classList.add('edit-todo');
    editButton.textContent = 'E';

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.classList.add('remove-todo');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', publishRemoveTodo);

    todoDiv.append(img, todoName, date, spacer, editButton, removeButton);

    const container = projectContainers.find(obj => obj.dataset.id === data.project.id);
    container.appendChild(todoDiv);
}

function publishRemoveTodo(e) {
    const parent = e.target.parentNode;
    const id = parent.dataset.id;
    PubSub.publish(CLICK_REMOVE_TODO, id);
}

function removeTodo(topic, todo) {
    const todos = todosDiv.querySelector('div');
    const todoDiv = todos.querySelector(`[data-id="${todo.id}"`);
    todos.removeChild(todoDiv);
}

export { init as initProjectUI };