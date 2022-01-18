import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Resource } from 'src/app/entities/resource';
import { PalindromeService } from 'src/app/services/palindrome-service/palindrome.service';
import { ResourceService } from 'src/app/services/resource-service/resource.service';

@Component({
  selector: 'app-palindrome-list',
  templateUrl: './palindrome-list.component.html',
  styleUrls: ['./palindrome-list.component.scss']
})
export class PalindromeListComponent implements OnInit, OnDestroy {

  items: Resource[] = [];

  destruction$ : Subject<void> = new Subject();

  constructor(private resourceService: ResourceService, private palindromeService: PalindromeService) { }

  ngOnInit(): void {
    this.resourceService.getAll()
      .pipe(takeUntil(this.destruction$))
      .subscribe(items => this.items = items)
  }

  getItemColor(item: Resource) {
    return this.palindromeService.isPalindrome(item.label) ? 'green':'red';
  }

  ngOnDestroy(): void {
    this.destruction$.next();
  }
}
