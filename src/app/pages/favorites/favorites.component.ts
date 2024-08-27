import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Character } from 'src/app/models/character.model';
import { selectAllFavorites } from 'src/app/store/selectors/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites$: Observable<Character[]>;

  constructor(
    private store: Store,
  ) {
    this.favorites$ = this.store.select(selectAllFavorites);
  }
}
