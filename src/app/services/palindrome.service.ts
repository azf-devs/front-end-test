import { InterviewData } from '../models/interview-data';
import { Injectable } from '@angular/core';
import interviewDataList from '../../assets/flux.json';

@Injectable({
  providedIn: 'root',
})
export class PalindromeService {
  constructor() {}

  isPalindrome(charSequence: string): boolean {
    return charSequence == charSequence.split('').reverse().join('');
  }

  loadInterviewData(): InterviewData[] {
    return interviewDataList.map((interviewData: InterviewData) => {
      interviewData.isPalindrome = this.isPalindrome(interviewData.label);
      return interviewData;
    });
  }
}
