export default class Project {
    #todos = [];
    #name;
    
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    add(todo) {
        this.#todos.push(todo);
    }

    remove(index) {
        this.#todos.splice(index, 1);
    }
}