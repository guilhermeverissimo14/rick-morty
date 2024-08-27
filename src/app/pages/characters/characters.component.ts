import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { map, Observable, startWith } from 'rxjs';

import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  search = faSearch;
  square = faSquareXmark

  characters: Character[] = [];

  filteredCharacters: Observable<Character[]> | any;

  myControl = new FormControl('');

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {

    this.characterService.getAllCharacter().subscribe((data: any) => {
      this.characters = data.results;
      this.filteredCharacters = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      );
    });

  }

  private _filter(value: string): Character[] {
    const filterValue = value.toLowerCase();
    return this.characters.filter((character: Character) => character.name.toLowerCase().includes(filterValue));
  }

  clearText() {
    this.myControl.setValue('');
  }

}
