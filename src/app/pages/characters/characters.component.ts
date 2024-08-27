import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { selectAllFavorites } from 'src/app/store/selectors/favorites.selectors';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] | any;

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.characters = this.characterService.getAllCharacter()
      .subscribe((data: any) => {
        this.characters = data.results;
      });
  }

}
