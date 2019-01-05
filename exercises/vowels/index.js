// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}



// function vowels(str) {
//     const holder = ['a', 'e', 'i', 'o', 'u'];
//     let answer = 0;

//     for (char of str.toLowerCase()) {
//         if (holder.includes(char)) {
//             answer++;
//         }
//     }

//     return answer;
// }

module.exports = vowels;
