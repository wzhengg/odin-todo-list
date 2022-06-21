import PubSub from 'pubsub-js';
import { ADD_TODO, CLICK_CREATE_TODO } from './topics';
import { projectTitleDiv, todosDiv, createTodoButton } from './dom';

const projectContainers = [];

function init() {
    renderTitle();
    bindCreateTodoButton();

    PubSub.subscribe(ADD_TODO, renderTodo);
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