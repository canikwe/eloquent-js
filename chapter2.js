//Looping a triangle
function myTriangle(num) {
  for (let i = '#'; i.length < num; i += '#') {
    console.log(i)
  }
}

//FizzBuzz 
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % (3 * 5) === 0) {
      console.log('FizzBuzz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}

//Chessboard
function chessBoard(num){
  for (let i = 0; i < num; i++){
    let row
    i % 2 === 0 ? row = ' ' : row = '#'
    for (let k = 1; k < num; k++) {
      row[k - 1] === ' ' ? row += '#' : row += ' '
    }
    console.log(row)
  }
}

function refactoredChessBoard(num) {
  let board = ''
  for (let i = 0; i < num; i++) {
    for (let k = 0; k < num; k++) {
      (k + i) % 2 === 0 ? board += '#' : board += ' '
    }
    board += '\n'
  }
  console.log(board)
}

