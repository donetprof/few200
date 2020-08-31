import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(s => s.counter.current);
  }

  increment(): void {
    // this.current += 1;
  }

  decrement(): void {
    // this.current -= 1;
  }

}
