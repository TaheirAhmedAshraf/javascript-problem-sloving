
// #Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

// FUNDAMENTALS, STRINGS, DATA TYPES, DATA STRUCTURES

// way 1

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
function isPangram(string) {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

var result = isPangram("The quick brown fox jumps over the lazy dog.")
console.log(result)
