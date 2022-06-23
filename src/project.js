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

    remove(id) {
        const i = this.#todos.findIndex(todo => todo.id === id);
        this.#todos.splice(i, 1);
    }
}