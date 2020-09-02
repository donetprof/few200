import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as appActions from '../../../actions/app.actions';
import * as mediaActions from '../actions/list.actions';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaAppEffects {

  removeItemFailure$ = createEffect(() =>
    this.action$.pipe(
      ofType(mediaActions.removedMediaItemFailure),
      map((a) => appActions.applicationFeatureError({ errorMessage: a.errorMessage, featureName: 'Media' }))
    )
  );

  displayMediaAddError$ = createEffect(() =>
    this.action$.pipe(
      ofType(mediaActions.addedMediaItemFailure),
      map((a) => appActions.applicationFeatureError({ errorMessage: a.errorMessage, featureName: 'Media' }))
    )
  );

  load$ = createEffect(() =>
    this.action$.pipe(
      ofType(appActions.applicationStarted),
      map(() => mediaActions.loadMediaData())
    )
  );
  constructor(private action$: Actions) { }
}
