////////////////     Deep Comparison (needs a recursive call to deepEqual for objects)    //////////////////////

function deepEqual(obj1, obj2){
  if (obj1 === obj2){
    return true
  }
}









/////////////////       A List         ///////////////////// 

function arrayToList(array) {
  const list = {}
  for(let i = array.length - 1; i < array.length; i--){
    list['value'] = array[i]
    // list['rest'] = { value: }
  }
}




///////////////     Reversing and Array    /////////////////

function reverseArrayInPlace(array){
  const halvedArr = Math.floor(array.length / 2)

  for(let i = 0; i < halvedArr; i++){
    const k = (i + 1) * -1
    const lastVal = array.slice(k)[0]
    const firstVal = array[i]
    
    array[i] = lastVal
    array[array.length + k] = firstVal
  }
  return array
}


function reverseArray(array){
  const newArray = []

  for (let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}


////////////////    The Sum of a range    ///////////////////
// function range(num1, num2){
//   const arry = []
//   for (let i = num1; i <= num2; i++){
//     arry.push(i)
//   }
//   return arry
// }

// function rangeWithStep(num1, num2, step = 1){
//   const arry = []

//   if (step > 0) {
//     for (let i = num1; i <= num2; i += step){
//       arry.push(i)
//     }
//   } else {
//     for (let i = num1; i >= num2; i += step) {
//       arry.push(i)
//     }
//   }
//   return arry
// }

// function sum(numArr){
//   let finalSum = 0

//   for (let i = 0; i < numArr.length ; i++) {
//     finalSum += numArr[i]
//   }
//   return finalSum
// }