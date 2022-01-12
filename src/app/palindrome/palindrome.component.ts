import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PalindromeService } from '../service/palindrome.service';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  isPalindrome = false;

  constructor(private activatedRoute: ActivatedRoute,
               private palindromeService: PalindromeService ) { }


  ngOnInit() {

    let word = this.activatedRoute.snapshot.params['word']

    this.isPalindrome = this.palindromeService.checkPalindrome(word);
	
  }

}
