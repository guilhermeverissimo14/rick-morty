import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
