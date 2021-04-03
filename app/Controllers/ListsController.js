import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState } from "../Utils/LocalStorage.js";

function _draw() {
    let lists = ProxyState.lists;
    let template = ''
    if (lists.length == 0) {
        template += '<div class="col text-center"><p><em>You are all caught up!</em><p></div>'
    }
    lists.forEach(l => template += l.Template)
    document.getElementById("lists").innerHTML = template
}

export default class ListsController {
    constructor() {
        ProxyState.on("lists", _draw);
        ProxyState.on("tasks", _draw);
        loadState()
        _draw()
    }

    addList() {
        window.event.preventDefault()
        let form = window.event.target
        let rawList = {
            name: form.name.value,
            color: form.color.value
        }
        console.log(rawList)
        listsService.addList(rawList)
        form.reset()
    }

    deleteList(id) {
        listsService.deleteList(id)
    }

}