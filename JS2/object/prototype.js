/*
 * prototype
    * 어떤 객체의 prototype이라는 속성은 객체 전용 옷(틀)이라고 할 수 있다.
    * 메모리 절약을 위해 사용
 */

// Number 객체에 power함수를 추가
Number.prototype.power = function(n = 2){
    return this.valueOf() ** n;
}

// 모든 Number 자료형들은 이제 power라는 함수를 사용할 수 있음
const num = 12;
console.log(num.power());
console.log(num.power(5));


// -------------------------------------------------------------------------------

// 기본 자료형이 String인 것은 contain함수를 사용할 수 있다
String.prototype.contain = function(str){
    let i = this.valueOf().indexOf(str)

    return i < 0 ? '존재하지 않습니다' : `${i}에 존재합니다`
}

// 배열인 것은 contain함수를 사용할 수 있다
Array.prototype.contain = function(n){
    let i = this.valueOf().indexOf(n)

    return i < 0 ? '존재하지 않습니다' : `${i}에 존재합니다`
}

const a = '안녕하세요'
console.log('안녕 : ' + a.contain('안녕'))
console.log('잘가 : ' + a.contain('잘가'))

const b = [273, 4, 56, 921, 34, 2]
console.log('0 : ' + b.contain(0))
console.log('921 : ' + b.contain(921))