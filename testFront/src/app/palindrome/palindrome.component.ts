import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  word : string  = "";
  isOK : string = "";

  constructor(private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.word = <string>this.route.snapshot.paramMap.get('word');
    this.isOK = this.isPalindrome(this.word) ? "OK" : "KO";
  }

  isPalindrome(word : string) : boolean {
    let length = word.length;
    let middle = Math.floor(length/2);

    for ( let i = 0; i < middle; i++ ) {
      if (word[i] !== word[length - 1 - i]) {
        return false;
      }
    }

    return true;
  }



}
