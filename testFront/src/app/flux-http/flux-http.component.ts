import { Component, OnInit } from '@angular/core';
import {FluxHttpService, Palindrome} from "../flux-http.service";
import {PalindromeComponent} from "../palindrome/palindrome.component";

@Component({
  selector: 'app-flux-http',
  templateUrl: './flux-http.component.html',
  styleUrls: ['./flux-http.component.css']
})
export class FluxHttpComponent implements OnInit {
   listOfLabels: Palindrome[] = [];



  constructor(private fluxService : FluxHttpService , private palindromeComponent : PalindromeComponent) { }

  ngOnInit(): void {
    this.fluxService.getData().subscribe(resp => {
       this.listOfLabels = resp;
       this.checkIfPalindrtome();
       console.log(this.listOfLabels);
    });
  }



  checkIfPalindrtome() : void {

    this.listOfLabels.forEach(object => {

      if(this.palindromeComponent.isPalindrome(object.label)) {
        object.isPalindrome = true;
      } else {
        object.isPalindrome = false;
      }

    })

  }

}
