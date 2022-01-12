import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemModel} from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getItems(): Observable<ItemModel[]> {
    return this.httpClient.get<ItemModel[]>('assets/flux.json');
  }
}
