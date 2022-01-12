import { Component, OnInit } from '@angular/core';
import Flux from '../../assets/flux.json';
import { Item } from '../model/item';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

   items : Item[]= [];

  constructor() {
  }

  ngOnInit(): void {
    Flux.forEach(f=>
      this.items.push(new Item(f.id,f.label,this.isPalindrome(f.label)))
      )
  }
  isPalindrome(str:string) {
    return str.split('').reverse().join('') === str;
  }
}
