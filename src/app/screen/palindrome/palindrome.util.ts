function reverse(word: string): string {
  if (!word) {
    return word;
  }

  return word.split('').reverse().join('');
}

export function palindrome(word: string): boolean {
  if (!word) {
    return false;
  }

  let toLowerCaseWord = word.toLowerCase();

  return toLowerCaseWord === reverse(toLowerCaseWord);
}
