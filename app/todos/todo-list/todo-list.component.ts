import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Todo} from "../../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']

})

export class TodoListComponent {
    @Input() todos: Todo[];
    @Output() deleted: EventEmitter<Todo> = new EventEmitter();
    @Output() toggle: EventEmitter<Todo> = new EventEmitter();

    onDeleted(todo: Todo) {
        this.deleted.emit(todo);
    }

    onToggle(todo: Todo) {
        this.toggle.emit(todo);
    }
}
