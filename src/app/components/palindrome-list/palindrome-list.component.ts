import { PalindromeService } from '../../services/palindrome.service';
import { InterviewData } from '../../models/interview-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome-list',
  templateUrl: './palindrome-list.component.html',
  styleUrls: ['./palindrome-list.component.scss'],
})
export class PalindromeListComponent {
  displayedColumns: string[] = ['Id', 'Label', 'PalidromeStatus'];
  data: InterviewData[] = [];

  constructor(private palindromeService: PalindromeService) {}

  ngOnInit() {
    this.data = this.palindromeService.loadInterviewData();
  }


}
