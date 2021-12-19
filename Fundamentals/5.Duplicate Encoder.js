// The goal of this exercise is to convert a string
// to a new string where each character in the new string
// is "(" if that character appears only once in the
// original string, or ")" if that character appears
// more than once in the original string.
// Ignore capitalization when determining if
// a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  var word = word.toLowerCase();
  let wordArray = {};
  for (let i = 0; i < word.length; i++) {
    wordArray[word[i]] = wordArray[word[i]] + 1 || 1;
  }
  for (let i = 0; i < word.length; i++) {
    if (wordArray[word[i]] > 1) {
      word = word.replace(word[i], ")");
    } else if (!wordArray[word[i]]) {
      return;
    } else {
      word = word.replace(word[i], "(");
    }
  }
  console.log(word);
}

duplicateEncode("hello");
