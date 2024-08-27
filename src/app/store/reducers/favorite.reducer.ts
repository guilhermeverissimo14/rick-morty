// src/app/store/reducers/favorites.reducer.ts
import { createReducer, on } from '@ngrx/store';

import { addFavorite, removeFavorite } from '../actions/favorites.actions';
import { Character } from 'src/app/models/character.model';

export interface FavoritesState {
  favorites: Character[];
}

const initialState: FavoritesState = {
  favorites: []
};

export const favoritesReducer = createReducer(
  initialState,
  on(addFavorite, (state, { character }) => {
    return {
      ...state,
      favorites: [...state.favorites, character]
    };
  }),
  on(removeFavorite, (state, { characterId }) => ({
    ...state,
    favorites: state.favorites.filter(fav => fav.id !== characterId)
  }))
);
