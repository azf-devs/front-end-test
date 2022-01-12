import {Component, OnInit} from '@angular/core';
import {PalindromeService} from './service/palindrome.service';
import {Observable, of} from 'rxjs';
import {ItemModel} from './model/item.model';
import {checkIsPalindrome} from '../../core/utils';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent implements OnInit {

  items$: Observable<ItemModel[]> = of([]);

  constructor(private readonly palindromeService: PalindromeService) {
  }

  ngOnInit(): void {
    this.items$ = this.palindromeService.getItems();
  }

  isPalindrome(str: string): boolean {
    return checkIsPalindrome(str);
  }

}
