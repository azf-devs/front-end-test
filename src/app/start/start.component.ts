import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  name:any;
  result:any;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  /*   this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    }); */
    this.name =this.route.snapshot.paramMap.get('name');
    this.result = this.isPalindrome(this.name)?'OK':'KO';
  }

  isPalindrome(str:string) {
    return str?.split('').reverse().join('') === str;
  }

}
