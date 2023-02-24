import { PalindromeService } from '../../services/palindrome.service';
import { InterviewTestModule } from '../../tests/interview.test.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeListComponent } from './palindrome-list.component';


describe('PalindromeListComponent', () => {
  let component: PalindromeListComponent;
  let fixture: ComponentFixture<PalindromeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromeListComponent ],
      imports: [InterviewTestModule],
      providers: [PalindromeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalindromeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
