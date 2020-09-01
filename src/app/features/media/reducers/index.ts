import { createSelector, createFeatureSelector } from '@ngrx/store';
export const featureName = 'mediaFeature';
import * as fromList from './list.reducer';
import * as models from '../models';

export interface MediaState {
  list: fromList.MediaState;
}

export const reducers = {
  list: fromList.reducer
};

// SELECTORS

// 1. Feature Selector
const selectFeature = createFeatureSelector<MediaState>(featureName);
// 2. A Selector Per Branch
const selectListBranch = createSelector(
  selectFeature,
  f => f.list
);
// 3. Helpers (optional)
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need.

// TODO: We need a selector that returns a MediaListItem[]

export const selectMediaList = createSelector(
  selectAllListItems,
  m => m as models.MediaListItem[]
);
