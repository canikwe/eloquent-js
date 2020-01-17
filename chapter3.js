console.log('Chapter 3 is now conntected')

//Minimum

function min(num1, num2){
  return num1 > num2 ? num2 : num1
}

//Recusion
function isEven(num){
  let newNum = num < 0 ? num * -1 : num
  if (newNum === 0) {
    return true
  } else if (newNum === 1) {
    return false
  } else {
    return isEven(newNum - 2)
  }
}

//Bean Counting
function countBs(string){
  let count = 0
  for (let i = 0; i < string.length; i++){
    if (string[i] === 'B') count++
  }
  return count
}

function countChar(string, char){
  let count = 0
  for (let i = 0; i < string.length; i++){
    if (string[i] === char) count++
  }
  return count
}