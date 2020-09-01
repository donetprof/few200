import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

// describe this for typescript
export interface CounterState {
  current: number;
  by: number;
}

// what would it be when the application starts?
const initialState: CounterState = {
  current: 0,
  by: 1
};

const reducerFunction = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by }))
);

export function reducer(previousState: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(previousState, action);
}
