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
        ProxyState.tasks.push(new Task(newTas.name, newTas.listId))
        saveState()
        ProxyState.tasks = ProxyState.tasks
    }

    // completed(id) {
    //     ProxyState.tasks = ProxyState.tasks.find(t => id == t.id)
    //     Task.completed = true
    //     Template() {
    //         if (this.completed) {
    //             return ``
    //         } else {
    //             return ``
    //         }
    //     }

    //     saveState()
    // }

}

export const tasksService = new TasksService();