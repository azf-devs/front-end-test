import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FluxPalindomeService {

  constructor(private httpClient: HttpClient) { }

  public getFlux(): Observable<any> {

    return this.httpClient.get("assets/flux.json");

  }
}
