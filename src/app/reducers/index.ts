import * as fromCounter from './counter.reducer';

// describe, for TypeScript what the application state looks like.
export interface AppState {
  counter: fromCounter.CounterState;
}

// Create an object which points to the reducer functions that maintain the state
export const reducers = {
  counter: fromCounter.reducer
};
