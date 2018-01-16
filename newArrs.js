'use strict';
// const repeat = (fn,n) => {
//     for (let i=1;i<=n;i++) {
//         fn();
//     }
// }


// const hello = () => {
//     console.log('Hello World');
// }

// const goodbye = () => {
//     console.log('Goodbye World');
// }

// // repeat(goodbye, 50);

// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// // console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:

// function filter(arr, fn) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];
//     if (fn(currentElement) === true) {
//       newArray.push(currentElement);
//     } else {
//       // then do nothing!
//     }
//   }
//   return newArray;
// }
// console.log(filteredNames);




// const hazardWarningCreator = (typeOfWarning) => {
//     let warningCounter = 0;
//     return function (location) {
//         warningCounter++;
//         let timeVar = '';
//         switch(warningCounter) {
//             case 1:
//             timeVar = 'time';
//             break;

//             default:
//             timeVar = 'times';
//             break;
//         }
//         console.log(`DANGER! THere is a ${typeOfWarning} hazard at ${location}!`);
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${timeVar} today!`)
//     }

// }

// let rocksWarning = hazardWarningCreator('Rocks on the Road!');

// let fireWarning = hazardWarningCreator('Fire on the Road!');

// let zombieWarning = hazardWarningCreator('Zombies on the Road!');


// rocksWarning('Broad St.');
// rocksWarning('Broad St.');


// zombieWarning('Rocky Road');
// zombieWarning('Rocky Road');
// zombieWarning('Rocky Road');
// zombieWarning('Rocky Road');

// fireWarning('Mayor\'s Office');
// fireWarning('Mayor\'s Office');
// fireWarning('Mayor\'s Office');
// fireWarning('Mayor\'s Office');
// fireWarning('Mayor\'s Office');
// fireWarning('Mayor\'s Office');

let turtleMatingDance = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let turtleSteps = turtleMatingDance.filter(steps => !(steps[0] < 0 || steps[1] < 0));
// (steps => !(steps[0] < 0 || steps[1] < 0)) gives us [ [ 0, 0 ], [ 0, 5 ], [ 3, 2 ] ]
// as opposed to [ [ 0, 0 ], [ 0, 5 ], [ 3, 2 ] ] without the ! operator
// let totalSteps = turtleSteps.map(step => Math.abs(step[0]) + Math.abs(step[1]));
let originalSteps = turtleMatingDance.map(step => Math.abs(step[0]) + Math.abs(step[1]));
// Math.abs takes any negative value and makes it positive so the turtle has more steps!
originalSteps.forEach(element => {
    console.log('The turtle took ' + element + ' steps.');
});


