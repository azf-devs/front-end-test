import { Component, OnInit } from '@angular/core';
import { Word } from '../model/word';
import { PalindromeService } from '../service/palindrome.service';

@Component({
  selector: 'app-palindrome-list',
  templateUrl: './palindrome-list.component.html',
  styleUrls: ['./palindrome-list.component.css']
})
export class PalindromeListComponent implements OnInit {

  words : Word[] = [];
  constructor(private palindromeService: PalindromeService) { }

  ngOnInit(): void {
    this.palindromeService.getPhrases()
    .subscribe((words: Word[]) => {
      words.forEach(word => {
        word.isPalindrome = this.palindromeService.checkPalindrome(word.label as string)
        this.words.push(word)
      })
    });
  }

}
