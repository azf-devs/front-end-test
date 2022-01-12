import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { PalindromeCheckComponent } from './palindrome-check.component';
import { PalindromeService } from 'src/app/services/palindrome.service';

describe('PalindromeCheckComponent', () => {
  let component: PalindromeCheckComponent;
  let fixture: ComponentFixture<PalindromeCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule], 
      providers: [PalindromeService],
      declarations: [ PalindromeCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
