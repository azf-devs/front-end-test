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

  it('should return true given a planidrome', () => {
    expect(service.isPalindrome('stats')).toEqual(true);
  })

  it('should return false given a non-planidrome', () => {
    expect(service.isPalindrome('palindome')).toEqual(false);
  })

  it('should return false given a empty word', () => {
    expect(service.isPalindrome('')).toEqual(false);
  })
});
