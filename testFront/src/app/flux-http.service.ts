import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Palindrome {
  isPalindrome: boolean;
  id: number;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class FluxHttpService {

  fluxUrl = 'https://www.linktogo.fr/assets/json/fluxpalindrome.json';
  constructor(private http : HttpClient) { }

  getData() {
    return this.http.get<Palindrome[]>(this.fluxUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
