import {checkIsPalindrome} from './utils';

describe('Utils', () => {

  it('should checkIsPalindrome return false if str is null', () => {
    expect(checkIsPalindrome(null)).toEqual(false);
  });

  it('should checkIsPalindrome return false if str is undefined', () => {
    expect(checkIsPalindrome(undefined)).toEqual(false);
  });

  it('should checkIsPalindrome return true if str = aba', () => {
    expect(checkIsPalindrome('aba')).toEqual(true);
  });

  it('should checkIsPalindrome return true if str = azerty', () => {
    expect(checkIsPalindrome('azerty')).toEqual(false);
  });

});
