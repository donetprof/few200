import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
export const featureName = 'mediaFeature';
import * as fromList from './list.reducer';
import * as fromUiHints from './ui-hints.reducer';
import * as models from '../models';
import { MediaListItem } from '../models';

export interface MediaState {
  list: fromList.MediaState;
  uiHints: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<MediaState> = {
  list: fromList.reducer,
  uiHints: fromUiHints.reducer
};

// SELECTORS

// 1. Feature Selector
const selectFeature = createFeatureSelector<MediaState>(featureName);
// 2. A Selector Per Branch
const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);
const selectUiHintsBranch = createSelector(
  selectFeature,
  f => f.uiHints
);
// 3. Helpers (optional)
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);

export const selectListFilter = createSelector(
  selectUiHintsBranch,
  b => b.listSort
);
// 4. What the components need.

// TODO: We need a selector that returns a MediaListItem[]

export const selectMediaUnfiltered = createSelector(
  selectAllListItems,
  m => [...m.sort((lhs: MediaListItem, rhs: MediaListItem) => {
    if (lhs.title.toLowerCase() > rhs.title.toLowerCase()) {
      return 1;
    }
    if (lhs.title.toLowerCase() < rhs.title.toLowerCase()) {
      return -1;
    }
    return 0;
  })] as models.MediaListItem[]
);

export const selectMediaList = createSelector(
  selectMediaUnfiltered,
  selectListFilter,
  (list, filter) => {
    if (filter === 'All') {
      return list;
    } else {
      return list.filter(item => item.format === filter);
    }
  }
);

export const selectDashboardModel = createSelector(
  selectMediaUnfiltered,
  m => {
    return {
      numberOfBooks: m.filter(b => b.format === 'Book').length,
      numberOfGames: m.filter(b => b.format === 'Game').length,
      numberOfMovies: m.filter(b => b.format === 'Movie').length,
      numberOfShows: m.filter(b => b.format === 'Show').length,
    } as models.DashboardSummary;
  }
);

export const selectMediaLoaded = createSelector(
  selectUiHintsBranch,
  b => b.mediaLoaded
);
