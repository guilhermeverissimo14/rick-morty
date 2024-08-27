import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectFavoritesCount } from 'src/app/store/selectors/favorites.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  favoritesCount$: Observable<number>;

  constructor(
    private store: Store,
  ) {
    this.favoritesCount$ = this.store.select(selectFavoritesCount);
  }

}
