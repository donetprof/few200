import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items: TodoListItem[] = [
    { description: 'Mow Lawn', completed: false },
    { description: 'Clean Windows', completed: true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  markComplete(item: TodoListItem): void {
    item.completed = true;
  }

}
