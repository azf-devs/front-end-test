import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalindromeService } from 'src/app/services/palindrome.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PalindromeListComponent } from './palindrome-list.component';

describe('PalindromeListComponent', () => {
  let component: PalindromeListComponent;
  let fixture: ComponentFixture<PalindromeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PalindromeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
