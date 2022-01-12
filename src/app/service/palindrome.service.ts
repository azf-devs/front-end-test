import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {

  url = "https://www.linktogo.fr/assets/json/fluxpalindrome.json"

  constructor(private http: HttpClient) { }

  checkPalindrome( word: string ) : boolean {

    let string = word.toString();

    let removeCharacter = string.toLowerCase();

    let reverseString = removeCharacter.split('').reverse().join('');

    return removeCharacter === reverseString;
  };

  getPhrases() : Observable<Word[]> {
    return this.http.get<Word[]>(this.url)
  }

}
