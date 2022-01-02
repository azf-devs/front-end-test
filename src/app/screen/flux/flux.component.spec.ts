import { ComponentFixture, TestBed} from '@angular/core/testing';
import { FluxComponent } from './flux.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FluxItem} from '../../domain/FluxItem';
import { MatTableModule } from '@angular/material/table';

const mockedData = [
  {id: 1, label: 'allianz'},
  {id: 2, label: 'toto'},
  {id: 3, label: 'oto'},
  {id: 4, label: '123456654321'},
  {id: 5, label: 'kayak'},
  {id: 6, label: 'radar'},
  {id: 7, label: 'sagas'},
];

const expectedResult: FluxItem[] = [
  new FluxItem(1, 'allianz', false),
  new FluxItem(2, 'toto', false),
  new FluxItem(3, 'oto', true),
  new FluxItem(4, '123456654321', true),
  new FluxItem(5, 'kayak', true),
  new FluxItem(6, 'radar', true),
  new FluxItem(7, 'sagas', true),
];

describe('FluxComponent', () => {
  let component: FluxComponent;
  let fixture: ComponentFixture<FluxComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxComponent ],
      imports: [HttpClientTestingModule, MatTableModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retreive json data and compute palindrome test', async () => {
    httpMock.expectOne('/assets/flux.json').flush(mockedData);

    expect(component).toBeTruthy();

    fixture.detectChanges();

    await fixture.whenStable();

    expect(component.flux).toEqual(expectedResult);
  });

  it('should show data with palindrome information as html table', async () => {
    httpMock.expectOne('/assets/flux.json').flush(mockedData);

    expect(component).toBeTruthy();

    fixture.detectChanges();

    await fixture.whenStable();

    expect(fixture.debugElement.nativeElement.querySelectorAll('.line').length).toEqual(7);
  });

  it('should show palindrome entry with green color otherwise red', async () => {
    httpMock.expectOne('/assets/flux.json').flush(mockedData);

    expect(component).toBeTruthy();

    fixture.detectChanges();

    await fixture.whenStable();

    const lines = fixture.debugElement.nativeElement.querySelectorAll('.line');
    expect(lines[0].classList).not.toContain('palindrome');
    expect(lines[1].classList).not.toContain('palindrome');
    expect(lines[2].classList).toContain('palindrome');
    expect(lines[3].classList).toContain('palindrome');
    expect(lines[4].classList).toContain('palindrome');
    expect(lines[5].classList).toContain('palindrome');
    expect(lines[6].classList).toContain('palindrome');
  });
});
