import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/app.actions';

export interface UiHintsState {
  hasError: boolean;
  error: string;
}

const initialState: UiHintsState = {
  hasError: false,
  error: null
};

const reducerFunction = createReducer(
  initialState,
  on(actions.applicationFeatureError, (s, a) => ({ ...s, hasError: true, error: a.errorMessage })),
  on(actions.clearApplicationFeatureError, (s, a) => ({ ...s, hasError: false, error: null }))
);

export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return reducerFunction(state, action);
}
