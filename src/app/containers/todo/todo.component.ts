import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: TodoListItem[] = [
    { id: '1', description: 'Mow Lawn', completed: false },
    { id: '2', description: 'Clean Windows', completed: true },
  ];

  currentId = 3;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(description: string): void {
    this.todoList = [{
      id: (this.currentId++).toString(),
      description,
      completed: false
    }, ...this.todoList];
  }

  markComplete(item: TodoListItem): void {
    item.completed = true;
  }

}
