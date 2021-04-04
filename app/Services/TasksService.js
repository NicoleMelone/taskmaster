import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
    deleteTask(id) {
        if (window.confirm('Are you sure you want to delete this task?')) {
            ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        }
        saveState()
    }

    addTask(newTas) {
        ProxyState.tasks.push(new Task(newTas.name, newTas.listId, newTas.checked, newTas.id))
        saveState()
        ProxyState.tasks = ProxyState.tasks
    }

    completed(bool, id) {
        ProxyState.tasks.find(t => id == t.id).checked = bool
        saveState()
        ProxyState.tasks = ProxyState.tasks

    }


}


export const tasksService = new TasksService();
//     Template() {
//         if (this.completed) {
//             return ``
//         } else {
//             return ``
//         }