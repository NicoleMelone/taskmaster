import { tasksService } from "../Services/TasksService.js";


export default class TasksController {
    addTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        let rawTas = {
            name: form['name'].value,
            listId: listId
        }
        tasksService.addTask(rawTas)
        form.reset()
    }

    deleteTask(id) {
        tasksService.deleteTask(id)
    }

    completed(id) {
        tasksService.completed(id)
    }
}