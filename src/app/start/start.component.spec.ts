import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from '@angular/router';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;
  let activatedRoute : ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartComponent ],
      imports: [RouterTestingModule.withRoutes([]),HttpClientTestingModule],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {paramMap: {
              get: (name: string) => {
                name: 'soso'
             }
            }}
          }
        }
      ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create',
      () => {
        expect(component).toBeTruthy();
      }
  )
  describe('Pandrome', () => {
    it('is pandrome should write ok', () => {
      const spyRoute = spyOn(activatedRoute.snapshot.paramMap,'get')
      spyRoute.and.returnValue('sos')
      component.ngOnInit();
      expect(component.result).toBe('OK');
    });

    it('is pandrome should write ko', () => {
      const spyRoute = spyOn(activatedRoute.snapshot.paramMap, 'get')
      spyRoute.and.returnValue('azi')
      component.ngOnInit();
      expect(component.result).toBe('KO');
    });
  });
});
