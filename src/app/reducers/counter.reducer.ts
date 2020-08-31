import { Action } from '@ngrx/store';

// describe this for typescript
export interface CounterState {
  current: number;
}

// what would it be when the application starts?
const initialState: CounterState = {
  current: 42
};

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return state;
}
