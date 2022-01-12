import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StartComponent} from './start.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;
  const paramMap = of({
    get: () => '123456654321'
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [StartComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            paramMap: paramMap
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return OK if text is palindrome', () => {
    const result = fixture.nativeElement.querySelector('div').textContent.trim();
    expect(result).toEqual('OK');
  });

});
