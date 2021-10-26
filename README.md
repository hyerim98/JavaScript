# JavaScript

### 문자열을 숫자형 정수로 변환  
```
console.log(parseInt('15', 10));
```   
### 실수형 숫자로 변환   
```
console.log(parseFloat('5.55 숫자의 결과값'));
```   
### 문자열 양 끝의 공백 없애기   
```
const sentences = ['   ABC abc', 'ABC abc   ', ` first 
second third
        forth
sentence    
`];
const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;
}

console.log(filterSentence(sentences));
```   
### 문자열 자르기   
```
const sentence = 'The sun will shine on us again';
console.log(sentence.slice(13)); // shine on us again
console.log(sentence.slice(0, -23)); // The sun -> -23 : 뒤에서부터 23번째 문자를 의미
```
```
const sentence = 'This will be the end of Wakanda';
console.log(sentence.substring(13)); // the end of Wakanda
console.log(sentence.substring(0, -20)); // 음수를 넣으면 정상적으로 실행되지 않는다
console.log(sentence.substring(20, 13)); // the end -> (13, 20)형태로 바꿔서 출력됨
```   
```
// 문자열 길이
const sentence = 'Wakanda Forever!!!';
console.log(sentence.substr(8)); // Forever!!!
console.log(sentence.substr(8, 7)); // Forever
```   
### 문자열로 변환하기
```
const num = 5;
const bool = true;
const arr = [1, 2, 3];
const obj = {a: 15};

console.log(num.toString()); // 5
console.log(bool.toString()); // true
console.log(arr.toString()); // 1, 2, 3
console.log(obj.toString()); // [Object, Object]

// Overriding
num.__proto__.toString = () => { 
    return 'toString 덮어쓰기';
};
console.log(num.toString()); // toString 덮어쓰기
```   
### 두 개의 문자열을 하나로 합치기   
```
const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 = ' - The Truman Show, 1998';
console.log(str1.concat(str2, str3, str4));
```
