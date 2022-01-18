import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PalindromeService } from 'src/app/services/palindrome-service/palindrome.service';

@Component({
  selector: 'app-palindrome-detector',
  templateUrl: './palindrome-detector.component.html',
  styleUrls: ['./palindrome-detector.component.scss']
})
export class PalindromeDetectorComponent implements OnInit, OnDestroy {

  result: string = '';

  destruction$: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute, private palindromeService: PalindromeService) { }

  ngOnInit(): void {
    this.route.url.pipe(takeUntil(this.destruction$))
      .subscribe(urlSegment => {
        let word = this.extractWordFromUrl(urlSegment);
        this.result = this.palindromeService.isPalindrome(word) ? 'OK':'KO';
      })
  }

  private extractWordFromUrl(urlSegment: UrlSegment[]): string {
    return urlSegment.length > 0 ? urlSegment[urlSegment.length - 1].path:'';
  }

  ngOnDestroy(): void {
      this.destruction$.next()
  }
}
