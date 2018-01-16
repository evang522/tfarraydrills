// 'use strict';
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




const hazardWarningCreator = (typeOfWarning) => {
    let warningCounter = 0;
    return function (location) {
        warningCounter++;
        let timeVar = '';
        switch(warningCounter) {
            case 1:
            timeVar = 'time';
            break;

            default:
            timeVar = 'times';
            break;
        }
        console.log(`DANGER! THere is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${timeVar} today!`)
    }

}

let rocksWarning = hazardWarningCreator('Rocks on the Road!');

let fireWarning = hazardWarningCreator('Fire on the Road!');

let zombieWarning = hazardWarningCreator('Zombies on the Road!');


rocksWarning('Broad St.');
rocksWarning('Broad St.');


zombieWarning('Rocky Road');
zombieWarning('Rocky Road');
zombieWarning('Rocky Road');
zombieWarning('Rocky Road');

fireWarning('Mayor\'s Office');
fireWarning('Mayor\'s Office');
fireWarning('Mayor\'s Office');
fireWarning('Mayor\'s Office');
fireWarning('Mayor\'s Office');
fireWarning('Mayor\'s Office');