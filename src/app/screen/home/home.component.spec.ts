import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MatListModule } from "@angular/material/list";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule.withRoutes([]), MatListModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should redirects to palindrome page', async () => {
    spy = spyOn(router, 'navigateByUrl');
    expect(component).toBeTruthy();

    (fixture.debugElement.nativeElement.querySelectorAll('mat-list-item button')[0]).click();

    await fixture.whenStable();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/start/stats');
  });

  it('should redirects to flux page', async () => {
    spy = spyOn(router, 'navigateByUrl');
    expect(component).toBeTruthy();

    (fixture.debugElement.nativeElement.querySelectorAll('mat-list-item button')[1]).click();

    await fixture.whenStable();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/flux');
  });
});
