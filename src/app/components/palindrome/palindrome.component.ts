import { PalindromeService } from '../../services/palindrome.service';
import { AlertMessage } from '../../models/alert-message';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusEnum } from 'src/app/models/status-enum';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss'],
})
export class PalindromeComponent {
  charSequence?: string;
  message?: AlertMessage;

  constructor(
    private route: ActivatedRoute,
    private palindromeService: PalindromeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.charSequence = params['charSequence'];
      if (this.charSequence) {
        if (this.palindromeService.isPalindrome(this.charSequence)) {
          this.message = {
            status: StatusEnum.SUCCESS,
            description: `OK -> ${this.charSequence} est palindrome`,
          };
        } else {
          this.message = {
            status: StatusEnum.ERROR,
            description: `KO -> ${this.charSequence} n'est palindrome`,
          };
        }
      }
    });
  }
}
