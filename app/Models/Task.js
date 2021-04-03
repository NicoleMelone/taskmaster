import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor(name, listId, quantity, id = generateId()) {
        this.id = id
        this.name = name
        this.listId = listId
        this.quantity = quantity
    }

    get Template() {
        return ` <li class="list-group-item"><input type="checkbox" onclick="completed(id)"> ${this.name}<i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li> `

    }
}