import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PalindromeService } from 'src/app/services/palindrome.service';


@Component({
  selector: 'app-palindrome-check',
  templateUrl: './palindrome-check.component.html',
  styleUrls: ['./palindrome-check.component.scss']
})
export class PalindromeCheckComponent implements OnInit {
  centered = true;
  keyWord: any;
  message: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private palindromeService: PalindromeService) { }

  ngOnInit(): void {

    this.keyWord = this.route.snapshot.paramMap.get('keyword');
    if (this.palindromeService.isPalindrome(this.keyWord)) 
      this.message = 'OK';
    else 
      this.message = 'KO'
  }



}
