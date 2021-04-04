import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor(name, color, id = generateId()) {
        this.name = name
        this.color = color
        this.id = id
    }

    get Template() {
        return `<div class="col-md-4">
        <div class="list-card shadow bg-white text-center rounded">
            <div class="text-center ${this.color} p-2 d-flex justify-content-between">
                <div class="d-flex flex-row">
                <i class="fas fa-times ml-2" onclick="app.listsController.deleteList('${this.id}')"></i>
                    <h2 class="text-center">${this.name}</h2>
                    <div class="text-light text-center d-flex align-items-end">${this.CompletedTasks}/${this.Total} remaining!</div>
                </div>
            </div>
            <div class="p-3">
                <ul>
                    ${this.Tasks}
                </ul>
            </div>
            <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
                <input type="text" name="name" id="name" class="form-control" placeholder="Task" aria-describedby="helpId"
                    required minlength="3" maxlength="50">
                <button type="submit" class="btn btn-success ml-2" title='add task'><i class="fas fa-plus"></i></button>
            </form>
        </div>
    </div>`
    }

    get Tasks() {
        let tas = ProxyState.tasks.filter(t => t.listId === this.id)
        let template = ''
        tas.forEach(i => template += i.Template)
        return template
    }

    get Total() {
        let tot = ProxyState.tasks.filter(t => t.listId === this.id)
        return tot.length
    }

    get CompletedTasks() {
        let comp = ProxyState.tasks.filter(t => t.listId === this.id && t.checked == false)
        return comp.length

    }

}