export default class Project {
    #todos = [];
    #name;
    #id;
    
    constructor(name, id) {
        this.#name = name;
        this.#id = id;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get id() {
        return this.#id;
    }

    set id(newID) {
        this.#id = newID;
    }

    add(todo) {
        this.#todos.push(todo);
    }

    remove(id) {
        const i = this.#todos.findIndex(todo => todo.id === id);
        return this.#todos.splice(i, 1).at(0);
    }
}