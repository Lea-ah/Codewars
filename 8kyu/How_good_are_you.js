// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// My answer:

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  // .push() my score to yourPoints
  // add all scored and divided by classPoints.length
  let sum = 0
  for ( let i = 0; i < classPoints.length; i++ ) {
    sum += classPoints[i] // 185
  }

  let averageTotal = sum / classPoints.length // 9
//   const averageScore = sum / classPoints.length
  // if / else statement: if yourPoints > classPoints = true / else = false
  if ( yourPoints > averageTotal) {
    return true
  } else {
    return false
  }
}

// formatted:
// function betterThanAverage(classPoints, yourPoints) {
//  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// }
