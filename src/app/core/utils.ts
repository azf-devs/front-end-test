

export function checkIsPalindrome(str: string): boolean {
   return str === str.split('').reverse().join('');
}
