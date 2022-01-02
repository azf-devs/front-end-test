import { palindrome } from './palindrome.util';

describe('PalindromeUtil', () => {
  it('should check if word is palindrome', async () => {
    expect(palindrome('allianz')).toBeFalsy();
    expect(palindrome('toto')).toBeFalsy();
    expect(palindrome('oto')).toBeTruthy();
    expect(palindrome('123456654321')).toBeTruthy();
    expect(palindrome('kayak')).toBeTruthy();
    expect(palindrome('radar')).toBeTruthy();
    expect(palindrome('sagas')).toBeTruthy();
  });

  it('should be insensitive case', async () => {
    expect(palindrome('otO')).toBeTruthy();
    expect(palindrome('KAYak')).toBeTruthy();
    expect(palindrome('radAr')).toBeTruthy();
    expect(palindrome('saGas')).toBeTruthy();
  });
});
