import { createAction, props } from '@ngrx/store';

export const mediaFilterSet = createAction(
  '[media] media filter set',
  props<{ by: string }>()
);
