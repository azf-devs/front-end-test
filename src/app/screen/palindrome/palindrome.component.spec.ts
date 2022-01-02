import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalindromeComponent } from './palindrome.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';

describe('PalindromeComponent', () => {
  let component: PalindromeComponent;
  let fixture: ComponentFixture<PalindromeComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          paramMap: of(new Map([["word", "stats"]])),
        },
      }],
      imports: [RouterTestingModule.withRoutes([]), MatCardModule],
      declarations: [ PalindromeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should retreive word query param', async () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();

    await fixture.whenStable();

    expect(component.word).toEqual('stats');
    expect(component.palindrome).toBeTruthy();
  });

  it('should show palindrome check result', async () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();

    await fixture.whenStable();

    expect(fixture.debugElement.nativeElement.querySelectorAll('dd')[0].textContent).toEqual('stats');
    expect(fixture.debugElement.nativeElement.querySelector('.check')).toBeDefined();
    expect(fixture.debugElement.nativeElement.querySelector('.cross')).toBeNull();
  });
});
