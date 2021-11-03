// 엄격모드
'use strict'

let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

numbers = numbers.filter((value) => value % 2 != 0)
       .filter((value) => value <= 100)
       .filter((value) => value % 5 == 0)

console.log(numbers);