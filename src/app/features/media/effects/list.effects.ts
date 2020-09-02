import { Actions, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as actions from '../actions/list.actions';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { ListEntity } from '../reducers/list.reducer';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ListEffects {
  // When we get a loadListData -> go to the API -> (loadListDataSucceeded | loadListDataFailed)
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMediaData),
      switchMap(() => this.client.get<{ data: ListEntity[] }>(environment.apiUrl + 'media')
        .pipe(
          map(response => actions.loadMediaDataSucceeded({ payload: response.data })),
          catchError(() => of(actions.loadMediaDataFailed({ message: 'Something went wrong with the API. Bummer' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
