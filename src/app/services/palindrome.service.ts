import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {

  palindromesUrl = 'https://www.linktogo.fr/assets/json/fluxpalindrome.json';
  constructor(private http: HttpClient) { }

  /* Checks if a given keyword is palindrome or not */
isPalindrome(str: string) {
    var re = /[^A-Za-z0-9]/g;
    let keyWord = str;
    if (keyWord !== null && keyWord !== undefined) {
      var lowRegStr = keyWord.toLowerCase().replace(re, '');
      var reverseStr = lowRegStr.split('').reverse().join(''); 
      return reverseStr === lowRegStr;
    } else 
      return false;

}


  /* GET palindrome keywords from the api resource */
getPalindromes(): Observable<any> {

  const apiUrl = this.palindromesUrl;
  return this.http.get(apiUrl).pipe(
      catchError(this.handleError) // then handle the error
    );
}

private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}}
