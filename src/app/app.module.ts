import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersComponent } from './pages/characters/characters.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    FavoritesComponent,
    HeaderComponent,
    CharacterCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
