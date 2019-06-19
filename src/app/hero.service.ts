import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './objects/hero';
import { HEROES } from './data/mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  constructor() { }
}
