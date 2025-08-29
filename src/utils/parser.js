function isNumeric(tok) {
  return /^-?\d+$/.test(tok);
}

function isAlphabetic(tok) {
  return /^[A-Za-z]+$/.test(tok);
}

function extractLettersFromToken(tok) {
  const matches = tok.match(/[A-Za-z]/g);
  return matches ? matches.join('') : '';
}

function alternateCaseStartingUpper(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    out += i % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
  }
  return out;
}

function parseDataArray(dataArray) {
  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];

  let sum = 0;
  const lettersSequence = [];

  for (const tok of dataArray) {
    const asStr = String(tok);

    // Number
    if (isNumeric(asStr)) {
      const val = parseInt(asStr, 10);
      sum += val;
      if (Math.abs(val) % 2 === 0) {
        even_numbers.push(asStr);
      } else {
        odd_numbers.push(asStr);
      }
      // no letters in numbers
    } else if (isAlphabetic(asStr)) {
      // pure alphabetic token
      alphabets.push(asStr.toUpperCase());
      const letters = extractLettersFromToken(asStr);
      if (letters) lettersSequence.push(...letters.split(''));
    } else {
      // special character token (includes mixed tokens)
      special_characters.push(asStr);
      const letters = extractLettersFromToken(asStr);
      if (letters) lettersSequence.push(...letters.split(''));
    }
  }

  // Build concat_string: reverse lettersSequence, alternate case
  const reversed = lettersSequence.reverse().join('');
  const concat_string = alternateCaseStartingUpper(reversed);

  return {
    even_numbers,
    odd_numbers,
    alphabets,
    special_characters,
    sum: String(sum),
    concat_string
  };
}

module.exports = { parseDataArray };
