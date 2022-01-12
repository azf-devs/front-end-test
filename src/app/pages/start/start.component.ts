import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TEXT_PARAM} from '../../core/constants';
import {checkIsPalindrome} from '../../core/utils';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  isPalindrome: boolean;

  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.isPalindrome = checkIsPalindrome(params.get(TEXT_PARAM));
    });
  }

}
