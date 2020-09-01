import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  // logIt$ = createEffect(() =>
  //   this.action$.pipe(
  //     tap(a => console.log(a.type))
  //   ), { dispatch: false }
  // );

  storeCountBy$ = createEffect(() =>
    this.action$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  readyCountBy$ = createEffect(() =>
    this.action$.pipe(
      ofType(applicationActions.applicationStarted),
      map(() => localStorage.getItem('by')), // null / '1' / '3' / '5'
      filter(by => by !== null), // '1' / '3' / '5'
      map(by => parseInt(by, 10)), // 1 / 3 / 5
      map(by => counterActions.countBySet({ by })) // sent to the reducer
    )
  );

  constructor(private action$: Actions) { }
}
