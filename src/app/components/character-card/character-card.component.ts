import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Character } from 'src/app/models/character.model';
import { addFavorite, removeFavorite } from 'src/app/store/actions/favorites.actions';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  isFavorite: Boolean = false;

  constructor(private store: Store) { }

  @Input() character: Character | any;

  ngOnInit(): void { }

  addToFavorites() {
    this.store.dispatch(addFavorite({ character: this.character }));
    this.isFavorite = true
  }
  removeFavorites() {
    this.store.dispatch(removeFavorite({ characterId: this.character.id }));
    this.isFavorite = false
  }
}
