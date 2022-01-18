import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resource } from 'src/app/entities/resource';
import DATA from 'src/assets/flux.json';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() { }

  getAll(): Observable<Resource[]> {
    return of(DATA);
  }
}
