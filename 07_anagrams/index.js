// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const createCharacterMaps = (input) => {
  const charMap = {};
  for (let char of input) {
    !charMap[char] ? (charMap[char] = 1) : charMap[char]++;
  }
  return charMap;
};

function anagrams(stringA, stringB) {
  const stringAClean = stringA.replace(/[^\w]/g, "").toLowerCase();
  const stringBClean = stringB.replace(/[^\w]/g, "").toLowerCase();

  // SOLUTION 1
  /* 
  const charMapA = createCharacterMaps(stringAClean);
  const charMapB = createCharacterMaps(stringBClean);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true; */

  // SOLUTION 2
  const sortedStringAClean = stringAClean.split("").sort().join("");
  const sortedStringBClean = stringBClean.split("").sort().join("");

  return sortedStringAClean === sortedStringBClean;
}

module.exports = anagrams;
