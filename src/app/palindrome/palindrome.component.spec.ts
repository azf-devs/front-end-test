import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeComponent } from './palindrome.component';

describe('PalindromeComponent', () => {
  let component: PalindromeComponent;
  let fixture: ComponentFixture<PalindromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromeComponent ],
      imports: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Pandrome', () => {
    it('background should have red color', () => {
      component.ngOnInit();
      component.items.forEach(el=>{
        if(!el.isPlandrome){
          const colorEl: HTMLElement = document.getElementById(''+el.id)!;
          expect(colorEl.className).toBe('red-background');
        }
      })

  });
      it('background should have green color', () => {
            component.ngOnInit();
            component.items.forEach(el=>{
              if(el.isPlandrome){
                const colorEl: HTMLElement = document.getElementById(''+el.id)!;
                expect(colorEl.className).toBe('green-background');
              }
            })

        });
  });
});
