import { TestBed } from '@angular/core/testing';

import { FluxPalindomeService } from './flux-palindome.service';

describe('FluxPalindomeService', () => {
  let service: FluxPalindomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxPalindomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
