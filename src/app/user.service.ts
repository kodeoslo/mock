import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COVERAGES, USERS, WANTED_DATASTRUCTURE } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$ = of(USERS);
  coverages$ = of(COVERAGES);
  wantedDatastructure$ = of(WANTED_DATASTRUCTURE);

  constructor() { }
}
