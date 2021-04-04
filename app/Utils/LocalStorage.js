
import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";


export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.lists = data.lists.map(list => new List(list.name, list.color, list.id));
        ProxyState.tasks = data.tasks.map(tas => new Task(tas.name, tas.listId, tas.id, tas.checked));
    }
}