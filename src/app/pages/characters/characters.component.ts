import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { addFavorite, removeFavorite } from 'src/app/store/actions/favorites.actions';
import { selectAllFavorites, selectFavoritesCount } from 'src/app/store/selectors/favorites.selectors';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] | any;

  favorites$: Observable<Character[]>;

  favoritesCount$: Observable<number>;

  constructor(
    private store: Store,
    private characterService: CharacterService
  ) {
    this.favorites$ = this.store.select(selectAllFavorites);
    this.favoritesCount$ = this.store.select(selectFavoritesCount);
  }

  ngOnInit(): void {
    this.characters = this.characterService.getAllCharacter()
      .subscribe((data: any) => {
        this.characters = data.results;
      });

    console.log(this.characters);
  }

  addToFavorites() {
    this.store.dispatch(addFavorite({ character: this.characters }));
  }
  removeFavorites() {
    this.store.dispatch(removeFavorite({ characterId: this.characters.id }));
  }
}
