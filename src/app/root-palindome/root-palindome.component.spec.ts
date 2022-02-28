import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPalindomeComponent } from './root-palindome.component';

describe('RootPalindomeComponent', () => {
  let component: RootPalindomeComponent;
  let fixture: ComponentFixture<RootPalindomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootPalindomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPalindomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
