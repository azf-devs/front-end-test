import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PalindromeComponent} from './palindrome.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PalindromeService} from './service/palindrome.service';
import {of} from 'rxjs';

describe('PalindromeComponent', () => {
  let component: PalindromeComponent;
  let fixture: ComponentFixture<PalindromeComponent>;
  let palindromeService: PalindromeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PalindromeComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeComponent);
    component = fixture.componentInstance;
    palindromeService = TestBed.get(PalindromeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check items', () => {
    const items = [
      {
        'id': 1,
        'label': 'allianz'
      },
      {
        'id': 2,
        'label': 'toto'
      }
    ];
    spyOn(palindromeService, 'getItems').and.returnValues(of(items));
    component.items$.subscribe(data => {
      expect(data).toEqual(items);
    });
  });

});
