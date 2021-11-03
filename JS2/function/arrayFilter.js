let arr = [0, 1, 2, 3, 4, 5];

let evenArr = arr.filter((value) =>  value % 2 == 0);

console.log(`원래 배열 : ${arr}`);
console.log(`짝수만 출력 : ${evenArr}`);