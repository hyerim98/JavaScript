/*
 * 전역 스코프
    - a : 100
 * print 스코프
    - b : 20
    - c : 30
*/

var a = 10;
console.log(a);

function print() {
  var b = 20;
  if (true) {
    var c = 30; // var키워드로 선언한 변수들은 모두 함수 스코프에 정의됨
  }
  console.log(c);
}

print();
console.log(b);