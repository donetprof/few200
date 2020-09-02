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

const initialState = adapter.getInitialState();
// const initialState: MediaState = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', title: 'Bill & Ted', recommendedBy: 'Jeff', format: 'Movie' },
//     2: { id: '2', title: 'Destiny 2', recommendedBy: 'Henry', format: 'Game' }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.addedMediaItem, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.removeMediaItem, (s, a) => adapter.removeOne(a.payload.id, s)),
  on(actions.loadMediaDataSucceeded, (s, a) => adapter.setAll(a.payload, s)),
  on(actions.addedMediaItemSucceeded, (s, a) => {
    const tempState = adapter.removeOne(a.tempId, s);
    return adapter.addOne(a.payload, tempState);
  }),
  on(actions.addedMediaItemFailure, (s, a) => adapter.removeOne(a.payload.id, s)),
  on(actions.makeUpperCaseTitle, (s, a) => adapter.updateOne({ id: a.payload.id, changes: { title: a.payload.title.toUpperCase() } }, s)),
);

export function reducer(state: MediaState = initialState, action: Action): MediaState {
  return reducerFunction(state, action);
}



