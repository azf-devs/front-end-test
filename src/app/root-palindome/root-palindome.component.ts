import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root-palindome',
  templateUrl: './root-palindome.component.html',
  styleUrls: ['./root-palindome.component.css']
})
export class RootPalindomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  checkPalindrome:boolean = false;
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let term = params['term'];
      if(term !=null){
       this.checkPalindrome =  this.isPalindrome(term);
      }
    });
  }

  isPalindrome( data: String ) {
    let removeCharacter = data.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // REVERSE THE STRING SO WE CAN COMPARE VALUES
    let reverseString = removeCharacter.split('').reverse().join('');

    // CHECK IF STRINGS IS SAME FORWARDS AND BACKWARDS
    console.log( removeCharacter == reverseString);
    return removeCharacter == reverseString;
  };
}
