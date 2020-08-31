import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})
export class TodoEntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  add(descriptionEl: HTMLInputElement): void {
    this.itemAdded.emit(descriptionEl.value);
    descriptionEl.value = '';
    descriptionEl.focus();
  }
}
