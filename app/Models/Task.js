import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor(name, listId, id = generateId(), checked = false) {
        this.id = id
        this.name = name
        this.listId = listId
        this.checked = checked
    }

    get Template() {
        return ` <li class="list-group-item"><input class="mr-2" type="checkbox" aria-label="Task Checkbox" id="box" onclick="app.tasksController.completed(this.checked, '${this.id}')" ${this.checked ? 'checked' : ''}> ${this.name} <i class="fas fa-times ml-2 text-danger" title ='delete' onclick="app.tasksController.deleteTask('${this.id}')"></i></li> `

    }


    // get Template() {
    //     if (this.checked === true) {
    //         return `<li class="list-group-item"><input type="checkbox" onclick="completed(id)" checked> ${this.name}<i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li> `
    //     } else {
    //         return `<li class="list-group-item"><input type="checkbox" onclick="completed(id)"> ${this.name}<i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>`
    //     }
    // }
}