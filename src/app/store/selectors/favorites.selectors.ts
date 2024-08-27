import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FavoritesState } from '../reducers/favorite.reducer';
import { Character } from 'src/app/models/character.model';

export const selectFavoritesState = createFeatureSelector<FavoritesState>('favorites');

export const selectAllFavorites = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.favorites
);

export const selectFavoritesCount = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.favorites.length
);
