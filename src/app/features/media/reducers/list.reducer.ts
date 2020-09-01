import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';
export interface ListEntity {
  id: string;
  title: string;
  recommendedBy: string;
  format: string;
}

export interface MediaState extends EntityState<ListEntity> {

}

export const adapter = createEntityAdapter<ListEntity>();

// const initialState = adapter.getInitialState();
const initialState: MediaState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Bill & Ted', recommendedBy: 'Jeff', format: 'Movie' },
    2: { id: '2', title: 'Destiny 2', recommendedBy: 'Henry', format: 'Game' }
  }
};


const reducerFunction = createReducer(
  initialState,
  on(actions.addedMediaItem, (s, a) => adapter.addOne(a.payload, s))
);

export function reducer(state: MediaState = initialState, action: Action): MediaState {
  return reducerFunction(state, action);
}



