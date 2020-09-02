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

