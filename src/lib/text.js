export function HasNumbersInAPhrase(phraseString) {
  const phrase = String(phraseString);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (const number of numbers) {
    if (phrase.includes(number)) {
      return true;
    }
  }

  return false;
}
