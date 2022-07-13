// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// My Answer:

function grow(x){
  let organise = x.sort(function(a,b) {return a - b} ) // [ 1, 2, 4, 6 ...]
  let sum = 1
  for ( let i = 0; i < organise.length; i++) {
    sum *= organise[i]
  }
  return sum
}

// refactored:

// const grow=x=> x.reduce((a,b) => a*b);
