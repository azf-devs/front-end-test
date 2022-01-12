import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {
  let service: PalindromeService

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule], 
      providers: [PalindromeService]});
    service = TestBed.inject(PalindromeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
