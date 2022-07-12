// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My answer :

function solution(str){
  let strToArray = str.split("")
  let reverseArray = strToArray.reverse()
  let joinArray = reverseArray.join("")
  return joinArray
}
