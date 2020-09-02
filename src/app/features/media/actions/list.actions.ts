import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';

let currentId = 0;

export const addedMediaItem = createAction(
  '[media] media item added',
  ({ title, format, recommendedBy }: { title: string, format: string, recommendedBy: string }) => ({
    payload: {
      title, format, recommendedBy,
      id: 'TEMP' + currentId++
    } as ListEntity
  })
);

export const addedMediaItemSucceeded = createAction(
  '[media] added media item succeeded',
  props<{ tempId: string, payload: ListEntity }>()
);

export const addedMediaItemFailure = createAction(
  '[media] added media item failed',
  props<{ payload: ListEntity, errorMessage: string }>()
);

export const loadMediaData = createAction(
  '[media] load media data'
);

export const loadMediaDataSucceeded = createAction(
  '[media] loading media data succeeded',
  props<{ payload: ListEntity[] }>()
);

export const loadMediaDataFailed = createAction(
  '[media] loading media data failed',
  props<{ message: string }>()
);

export const removeMediaItem = createAction(
  '[media] media item removes',
  props<{ payload: ListEntity }>()
);

export const removedMediaItemFailure = createAction(
  '[media] media item remove failed',
  props<{ payload: ListEntity, errorMessage: string }>()
);

export const makeUpperCaseTitle = createAction(
  '[media] make upper case title',
  props<{ payload: ListEntity }>()
);

