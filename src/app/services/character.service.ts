import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacter() {
    return this.http.get<Character[]>("https://rickandmortyapi.com/api/character")
  }
}
