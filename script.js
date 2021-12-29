// Задача 1
let massage = prompt('Enter wat you want')

function showMessage(elem) {
  alert(elem)
}
showMessage(massage)

// Задача 2

let oneNum = prompt('Enter the number')
let twoNum = prompt('Enter two number')

function calcNum(oneNum, twoNum) {
  if (oneNum === twoNum) {
    alert(0)
  } else if (oneNum < twoNum) {
    alert(-1)
  } else {
    alert(1)
  }
}

calcNum(oneNum, twoNum)

// Задача 3

let ask = prompt('Enter number')

function calcFactorial(el) {
  return el ? el * calcFactorial(el - 1) : 1
}

alert(calcFactorial(ask))

// Задача 4

let finalNum = ''

function calc() {
  let num = prompt('Enter the number')
  finalNum += num
}

for (let i = 0; i < 3; i++) {
  calc()
}

alert('It turned out = ' + finalNum)

// Задача 5

let oneArea = prompt('Enter the numeric length of your rectangle')
let twoArea = prompt('Enter the second side')

function calcArea(oneNum, twoNum) {
  let calcNum = 0
  if (oneNum == false) {
    calcNum = twoNum * twoNum
    alert('The area of ​​your rectangle = ' + calcNum)
  } else if (twoNum == false) {
    calcNum = oneNum * oneNum
    alert('The area of ​​your rectangle = ' + calcNum)
  } else {
    calcNum = oneNum * twoNum
    alert('The area of ​​your rectangle = ' + calcNum)
  }
}

calcArea(oneArea, twoArea)
