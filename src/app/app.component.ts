import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from './models/character.model';
import { selectAllFavorites, selectFavoritesCount } from './store/selectors/favorites.selectors';
import { addFavorite } from './store/actions/favorites.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  character: any


  favorites$: Observable<Character[]>;
  favoritesCount$: Observable<number>;

  constructor(private store: Store) {
    this.favorites$ = this.store.select(selectAllFavorites);
    this.favoritesCount$ = this.store.select(selectFavoritesCount);
  }

  ngOnInit(): void {

    this.character = [
      {
        id: 1,
        name: "Luke Skywalker",
        image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        species: "Human"
      },
      {
        id: 2,
        name: "João",
        image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        species: "Pessoa"
      }
    ]
  }

  addToFavorites() {
    this.store.dispatch(addFavorite({ character: this.character }));
  }
}
