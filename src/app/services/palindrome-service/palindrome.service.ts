import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {

  isPalindrome(word: string): boolean {
    if (!word) {
      return false;
    }
    
    let reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
  }
}
