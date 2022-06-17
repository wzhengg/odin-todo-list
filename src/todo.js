export default class Todo {
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get title() {
        return this.#title;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    get description() {
        return this.#description;
    }

    set description(newDesc) {
        this.#description = newDesc;
    }

    get dueDate() {
        return this.#dueDate;
    }

    set dueDate(newDueDate) {
        this.#dueDate = newDueDate;
    }

    get priority() {
        return this.#priority;
    }

    set priority(newPriority) {
        this.#priority = newPriority;
    }
}