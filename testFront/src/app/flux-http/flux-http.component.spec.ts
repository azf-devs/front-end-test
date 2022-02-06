import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxHttpComponent } from './flux-http.component';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PalindromeComponent} from "../palindrome/palindrome.component";



describe('FluxHttpComponent', () => {
  let component: FluxHttpComponent;
  let fixture: ComponentFixture<FluxHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxHttpComponent ],
      providers : [HttpClient,HttpHandler,Router,PalindromeComponent,{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get(): string {
                return '123';
              },
            },
          },
        },
      } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
