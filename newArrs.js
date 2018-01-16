'use strict';
const repeat = (fn,n) => {
    for (let i=1;i<=n;i++) {
        fn();
    }
}


const hello = () => {
    console.log('Hello World');
}

const goodbye = () => {
    console.log('Goodbye World');
}

// repeat(goodbye, 50);

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:

function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (fn(currentElement) === true) {
      newArray.push(currentElement);
    } else {
      // then do nothing!
    }
  }
  return newArray;
}
console.log(filteredNames);