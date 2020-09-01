import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[Counter] count incremented'
);

export const countDecremented = createAction(
  '[Counter] count decremented'
);

export const countReset = createAction(
  '[Counter] count reset'
);

export const countBySet = createAction(
  '[Counter] count by set',
  props<{ by: number }>()
);
