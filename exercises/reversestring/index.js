// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//    debugger;
    return str.split('').reverse().join('');
}

reverse('Hello');

module.exports = reverse;

// let reversed = '';
// for (let character of str) {
//     reversed = character + reversed;
// }
// return reversed;