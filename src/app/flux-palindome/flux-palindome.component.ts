import { Component, OnInit } from '@angular/core';
import { FluxPalindomeService } from './flux-palindome.service';

@Component({
  selector: 'app-flux-palindome',
  templateUrl: './flux-palindome.component.html',
  styleUrls: ['./flux-palindome.component.css']
})
export class FluxPalindomeComponent implements OnInit {

  constructor(private fluxPalindomeService: FluxPalindomeService) { }
  datas: any[] | undefined;
  ngOnInit(): void {

    this.fluxPalindomeService.getFlux().subscribe(data => {
      this.datas = data;
      console.log(data)
    })
  }

  public isPalindrome(data: String): boolean {
    let removeCharacter = data.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // REVERSE THE STRING SO WE CAN COMPARE VALUES
    let reverseString = removeCharacter.split('').reverse().join('');

    // CHECK IF STRINGS IS SAME FORWARDS AND BACKWARDS
    console.log(removeCharacter == reverseString);
    return removeCharacter == reverseString;
  };
}
