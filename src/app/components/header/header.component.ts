import { Component } from '@angular/core';
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectFavoritesCount } from 'src/app/store/selectors/favorites.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faHome = faHome;
  faHeart = faHeart;

  favoritesCount$: Observable<number>;

  constructor(
    private store: Store,
  ) {
    this.favoritesCount$ = this.store.select(selectFavoritesCount);
  }

}
