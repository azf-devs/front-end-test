import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { palindrome } from './palindrome.util';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent implements OnInit {
  word = '';
  url = '';
  palindrome = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.word = paramMap.get('word') || '';
      this.url = this.router.url;
      debugger;
      this.palindrome = palindrome(this.word)
    });
  }

}
