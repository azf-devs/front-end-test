import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxPalindomeComponent } from './flux-palindome.component';

describe('FluxPalindomeComponent', () => {
  let component: FluxPalindomeComponent;
  let fixture: ComponentFixture<FluxPalindomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxPalindomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxPalindomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
