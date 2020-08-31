import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() items: TodoListItem[] = [];
  @Input() caption = 'Your List of Todos';
  @Output() itemCompleted = new EventEmitter<TodoListItem>();
  constructor() { }

  ngOnInit(): void {
  }

  markComplete(item: TodoListItem): void {
    this.itemCompleted.emit(item);
  }

}
