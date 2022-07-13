// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


// My Answer :

function opposite(number) {
  //your code here
  if ( number > 0) {
    return -number
  } else {
    return Math.abs(number)
  }
}

// Refactored:

// function opposite(number) {
//   return(-number);
// }
