import { TestBed } from '@angular/core/testing';

import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {
  let service: PalindromeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalindromeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for the word stats', () => {
    expect(service.isPalindrome('stats')).toBeTrue();
  });

  it('should return false for the word palindrome', () => {
    expect(service.isPalindrome('palindrome')).toBeFalse();
  });

  it('should return a list of interviewData with the palindrome status', () => {
    const expectedResult = [
      { id: 1, label: 'allianz', isPalindrome: false },
      { id: 2, label: 'toto', isPalindrome: false },
      { id: 3, label: 'oto', isPalindrome: true },
      { id: 4, label: '123456654321', isPalindrome: true },
      { id: 5, label: 'kayak', isPalindrome: true },
      { id: 6, label: 'radar', isPalindrome: true },
      { id: 7, label: 'sagas', isPalindrome: true },
    ];
    expect(service.loadInterviewData()).toEqual(expectedResult);
  });
});
