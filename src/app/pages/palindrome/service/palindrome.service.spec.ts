import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {PalindromeService} from './palindrome.service';

describe('PalindromeService', () => {

  let httpTestingController: HttpTestingController;
  let palindromeService: PalindromeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PalindromeService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    palindromeService = TestBed.get(PalindromeService);
  });


  it('should getItems() return the right data', () => {
    const items = [
      {
        'id': 1,
        'label': 'allianz'
      },
      {
        'id': 2,
        'label': 'titi'
      }
    ];
    palindromeService.getItems().subscribe(
      (response) => {
        expect(response).not.toBeNull();
        expect(response.length).toEqual(2);
        expect(response).toEqual(items);
      }
    );
    const requestObject = httpTestingController.expectOne('assets/flux.json');
    expect(requestObject.request.method).toEqual('GET');
    requestObject.flush(items);
  });


  afterEach(() => {
    httpTestingController.verify();
  });

});
