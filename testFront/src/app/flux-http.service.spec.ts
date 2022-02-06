import { TestBed } from '@angular/core/testing';

import { FluxHttpService } from './flux-http.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('FluxHttpService', () => {
  let service: FluxHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [HttpClient,HttpHandler]
      });
    service = TestBed.inject(FluxHttpService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
