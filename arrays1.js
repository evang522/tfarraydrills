// r max). Also, for obvious reasons, you are not allowed to use Math.max or Math.min.max and min (without sort)
// To complete this drill, you need to implement 2 functions, max and min. Both functions should take a single argument: a list of numbers called numbers. max(numbers) should return the largest number in the list, while min(numbers) should return the smallest.

// Assume that the numbers input only contains numbers (that is, you don't have to inspect your inputs to confirm they only contain numbers).

// If the numbers array is empty, then both max and min should return null or undefined, whichever is more convenient.

// Finally, note that you are not allowed to use JavaScript's sort method, which provides a simple-but-inefficient way to solve this problem (simply sort the list and return either the first or last element, depending on if you need min o

// max

// let numArr  = [];

//  let max = (numbers) => {
//     // take the numbers array and run a while loop
//     if (numbers.length === 0) {
//         return null;
//     }  else {
//     let i = 0;
//     let baseNum = -Infinity;
//     while (i<numbers.length) {
//         if (numbers[i] > baseNum) {
//             baseNum = numbers[i];
//         }
//         i++
//     }
//     console.log(baseNum + ' Should be the highest number in this array');
//     return baseNum;
//     }
// }

// max(numArr);

// let minArray = [1, 23, 3, -3, 1000];

// let min = (numbers) => {
//     if (numbers.length === 0) {
//         return undefined;
//     } else {
//         let i = 0;
//         let fakeMin = Infinity;
//         while (i < numbers.length) {
//             if (numbers[i] < fakeMin) {
//                 fakeMin = numbers[i];
//             }
//             i++;
//         }
//         console.log(`${fakeMin} should be the lowest number in this array`);
//         return fakeMin;
//     }
// }

// min(minArray);