import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';

import { Character } from 'src/app/models/character.model';
import { addFavorite, removeFavorite } from 'src/app/store/actions/favorites.actions';
import { isFavorite } from 'src/app/store/selectors/favorites.selectors';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  isFavorited: Boolean = false;

  faHeart = faHeart;

  faHeartRegular = faHeartRegular

  constructor(private store: Store) { }

  @Input() character: Character | any;

  ngOnInit(): void {
    this.store.select(isFavorite, { characterId: this.character.id })
      .subscribe((isFav) => this.isFavorited = isFav);
  }

  addToFavorites() {
    this.store.dispatch(addFavorite({ character: this.character }));
  }
  removeFavorites() {
    this.store.dispatch(removeFavorite({ characterId: this.character.id }));
  }
}
