import {isNullOrUndefined} from 'util';

export function checkIsPalindrome(str: string): boolean {
  return !isNullOrUndefined(str) ? str ===
    str.split('').reverse().join('') : false;
}
