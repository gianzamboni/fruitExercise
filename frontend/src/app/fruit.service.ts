import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Fruit } from './fruit';
import { FRUITS } from './mock-fruits';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FruitService {

  private fruitUrl = 'http://localhost:3000/fruits'
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.fruitUrl);
  }
}
