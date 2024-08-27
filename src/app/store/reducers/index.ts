import { ActionReducerMap } from '@ngrx/store';
import { FavoritesState, favoritesReducer } from './favorite.reducer';

export interface AppState {
  favorites: FavoritesState;
}

export const reducers: ActionReducerMap<AppState> = {
  favorites: favoritesReducer
};
