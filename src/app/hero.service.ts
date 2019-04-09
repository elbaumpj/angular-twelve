import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  pubKey = environment.MARVEL_PUBLIC_KEY;
  apiUrl = 'http://gateway.marvel.com';
  characterParams = '/v1/public/characters?limit=20&apikey=';
  characterById = '/v1/public/characters/';

  constructor(private http: HttpClient) { }


  getCharacters(): Observable<any> {
    const url = `${this.apiUrl}${this.characterParams}${this.pubKey}`;
    console.log(url);
    return this.http.get(url);
  }

  getCharacterById(id): Observable<any> {
    const url = `${this.apiUrl}${this.characterById}${id}?apikey=${this.pubKey}`;
    return this.http.get(url);
  }
}
