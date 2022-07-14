// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


// My Answer:

function digitize(n) {
  //code here
  return results = n.toString().split('').map(Number).reverse();
}

// REFACTORED:

// function digitize(n) {
//  return String(n).split('').map(Number).reverse()
//  }
