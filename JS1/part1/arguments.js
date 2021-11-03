// 자바스크립트는 전달 인자의 개수와 매개변수의 개수가 달라도 에러를 발생하지 않습니다.

function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    console.log(arguments instanceof Array); // arguments 객체가 배열이 아닌 것을 확인
    return total;
}
  
  var sumOf1to3 = sum(1, 2, 3);
  console.log(sumOf1to3);
  
function testArg() {
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b')); // arguments 객체는 배열이 아니기 때문에 에러 발생
}

  testArg('a', 'b');