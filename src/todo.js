export default class Todo {
    #name;
    #description;
    #dueDate;
    #priority;
    #id;

    constructor(name, description, dueDate, priority, id) {
        this.#name = name;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#id = id;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
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

    set dueDate(newDate) {
        this.#dueDate = newDate;
    }

    get priority() {
        return this.#priority;
    }

    set priority(newPriority) {
        this.#priority = newPriority;
    }

    get id() {
        return this.#id;
    }

    set id(newID) {
        this.#id = newID;
    }
}