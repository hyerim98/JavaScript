// 추가적인 것은 github readMe 부분에 존재

const str = new String('자바스크립트');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
/*
 * Map
    - key : value
    - key의 중복성을 허용하지 않는다
    - Iterator를 통해 Map의 데이터를 순회한다
*/
const map = new Map();
/*
 * Set
    - 오직 값으로만 이루어진 데이터 집합체
    - Iterator로 순회
    - 값의 중복성을 허용하지 않는다
 */
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));
console.log(str.valueOf());


/*
 * isNaN
    - Not a Number
    - true : 숫자아님
    - false : 숫자
 */
function verifyNumber(n) {
    // true이면 숫자가 아니면 return 0
    if (!n || Number.isNaN(n)) return 0;
    return n; 
}

const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined); // 0
const num3 = verifyNumber(null); // 0
const num4 = verifyNumber(NaN); // 0
console.log(num1 + num2 + num3 + num4);



// isInterger : 정수인지 확인
function verifyInteger(n) {
    if (!Number.isInteger(n)) return 0;
    return n; 
}
const num11 = verifyInteger(15);
const num22 = verifyInteger(Infinity);
const num33 = verifyInteger(0.05);
console.log(num11, num22, num33);


// isArray : 배열 자료형인지 확인
function callRoll(students) {
    if (!Array.isArray(students)) return;
    
    students.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);