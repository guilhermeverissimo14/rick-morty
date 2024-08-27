import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from './models/character.model';
import { selectAllFavorites, selectFavoritesCount } from './store/selectors/favorites.selectors';
import { addFavorite, removeFavorite } from './store/actions/favorites.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


}
