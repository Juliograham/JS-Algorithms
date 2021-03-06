// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// function levelWidth(root) {
//     const bookmark = 'done';
//     const counter = [0];
//     const arr = [root, bookmark];

//     while (arr.length > 1) {
//         const node = arr.shift();

//         if (node === bookmark) {
//             counter.push(0);
//             arr.push(bookmark);
//         } else {
//             arr.push(...node.children);
//             counter[counter.length - 1]++;
//         }                
//     }

//     return counter;
// }

const levelWidth = (root) => {
    const counters = [0];
    const bookmark = 'Empty';
    const holder = [root, bookmark];

    while (holder.length > 1) {
        const node = holder.shift();
        if (node === bookmark) {
            counters.push(0);
            holder.push(bookmark);
        } else {
            holder.push(...node.children);
            counters[counters.length - 1]++;
        }
    }
    return counters;
}

module.exports = levelWidth;
