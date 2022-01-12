import { trigger } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { PalindromeService } from 'src/app/services/palindrome.service';
@Component({
  selector: 'app-palindrome-list',
  templateUrl: './palindrome-list.component.html',
  styleUrls: ['./palindrome-list.component.scss']
})
export class PalindromeListComponent implements OnInit {

  isPalindrome = true;
  constructor(private palindromeService: PalindromeService ) { }

  items : any;

  ngOnInit(): void {
    this.palindromeService.getPalindromes().subscribe(response => {
      console.log(response);
      this.items = response;
      console.log(this.items);
    });
  }

  getStyle(keyWord: any) {
    let palindrome = {
      'color': 'green',
      'font-size': '25px'
    }
    let notPalindrome = { 
      'color': 'red',
      'font-size': '25px'
    }
    if (this.palindromeService.isPalindrome(keyWord))
      return palindrome;
    else 
      return notPalindrome;
  }

}
