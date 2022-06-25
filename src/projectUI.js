import PubSub from 'pubsub-js';
import {
    ADD_PROJECT, ADD_TODO, CLICK_CREATE_TODO, CLICK_REMOVE_TODO,
    REMOVE_PROJECT, REMOVE_TODO, SELECT_PROJECT
} from './topics';
import { projectTitleDiv, todosDiv, createTodoButton, todoModal, todoForm,
    todoNameInput, todoDescriptionInput, todoDueDateInput, todoPriorityInput,
    validateTodoFormButton, saveTodoButton, cancelTodoButton
} from './dom';
import highPriorityMarker from './img/high-priority-marker.svg';
import normalPriorityMarker from './img/normal-priority-marker.svg';
import lowPriorityMarker from './img/low-priority-marker.svg';
import { format, parse } from 'date-fns'

const projectContainers = [];

function init() {
    PubSub.subscribe(ADD_PROJECT, createProjectContainer);
    PubSub.subscribe(SELECT_PROJECT, updateTitle);
    PubSub.subscribe(SELECT_PROJECT, renderProject);
    PubSub.subscribe(REMOVE_PROJECT, removeContainer);
    PubSub.subscribe(ADD_TODO, renderTodo);
    PubSub.subscribe(REMOVE_TODO, removeTodo);

    bindCreateTodoButton();
    bindSaveTodoButton();
    bindCancelTodoButton();
    preventSubmitOnEnter();
}

function bindCreateTodoButton() {
    createTodoButton.addEventListener('click', openTodoModal);
}

function openTodoModal() {
    resetTodoForm()
    todoModal.showModal();
}

function resetTodoForm() {
    todoNameInput.value = '';
    todoDescriptionInput.value = '';
    todoDueDateInput.value = '';
    todoPriorityInput.selectedIndex = 1;
}

function bindSaveTodoButton() {
    saveTodoButton.addEventListener('click', publishTodoData);
}

function publishTodoData() {
    if (!todoForm.checkValidity()) {
        validateTodoFormButton.click();
        return;
    }

    closeTodoModal();

    const name = todoNameInput.value;
    const desc = todoDescriptionInput.value;
    let date = '';
    if (todoDueDateInput.value !== '') {
        date = parse(todoDueDateInput.value, 'yyyy-MM-dd', new Date());
    }
    const priority = todoPriorityInput.value;

    PubSub.publish(CLICK_CREATE_TODO, { name: name, desc: desc, date: date, priority: priority });
}

function bindCancelTodoButton() {
    cancelTodoButton.addEventListener('click', closeTodoModal);
}

function closeTodoModal() {
    todoModal.close();
}

function preventSubmitOnEnter() {
    todoForm.addEventListener('keydown', e => {
        if ((e.keyCode === 13 || e.which === 13) && e.target.type !== 'textarea') {
            e.preventDefault();
        }
    });
}

function createProjectContainer(topic, project) {
    const projectContainer = document.createElement('div');
    projectContainer.dataset.id = project.id;
    projectContainers.push(projectContainer);
    createTodoButton.style.display = 'block';
}

function updateTitle(topic, project) {
    projectTitleDiv.textContent = project.name;
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
        projectTitleDiv.textContent = 'Create a project to add todos';
    }
}

function renderTodo(topic, data) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.dataset.id = data.todo.id;

    const img = new Image();
    if (data.todo.priority === 'high') {
        img.src = highPriorityMarker;
    } else if (data.todo.priority === 'low') {
        img.src = lowPriorityMarker;
    } else {
        img.src = normalPriorityMarker;
    }
    img.alt = 'priority-marker';

    const todoName = document.createElement('div');
    todoName.classList.add('todo-name');
    todoName.textContent = data.todo.name;

    const date = document.createElement('div');
    date.classList.add('date');
    if (data.todo.dueDate === '') {
        date.textContent = 'no date';
    } else {
        date.textContent = format(data.todo.dueDate, 'MMM d yyyy');
    }

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