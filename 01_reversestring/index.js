// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // SOLUTION 1
  // return str.split("").reverse().join("");
  //******************************************* */
  // SOLUTION 2
  /*let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;*/
  /********************************* */

  // SOLUTION 3
  return str.split("").reduce((acc, rev) => rev + acc, "");
}

module.exports = reverse;
