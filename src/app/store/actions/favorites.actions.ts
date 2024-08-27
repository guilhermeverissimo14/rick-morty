import { createAction, props } from "@ngrx/store";
import { Character } from "src/app/models/character.model";

export const addFavorite = createAction('[Favorites] Add Favorite', props<{ character: Character }>());
export const removeFavorite = createAction('[Favorites] Remove Favorite', props<{ characterId: number }>());
