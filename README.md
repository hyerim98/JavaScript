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
### 문자열 자르기/배열 특정 위치의 요소 추출
```
// 문자열
const sentence = 'The sun will shine on us again';
console.log(sentence.slice(13)); // shine on us again
console.log(sentence.slice(0, -23)); // The sun -> -23 : 뒤에서부터 23번째 문자를 의미

// 배열
const arr = ['melon', 'lemon', 'source', 'apple', 'juice'];
console.log(`과일이 아닌 요소는 ${arr.slice(2, 3)} 와 ${arr.slice(4,5)} 입니다.`); // source와 juice
console.log(arr.slice(0, 10));
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
### 각각의 문자열, 배열을 하나로 합치기   
```
// 문자열 합치기
const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 = ' - The Truman Show, 1998';
console.log(str1.concat(str2, str3, str4));

// 배열 합치기
const prevList = [1, 2, 3];
const currentList = [4, 5, 6];
const nextList = [7, 8, 9];

console.log(prevList.concat(currentList));
console.log(prevList.concat(currentList, nextList));
```   
### 특정 위치의 문자 반환
```
const str = 'Good afternoon, Good evening, and Good night! ' 
    + '- The Truman Show, 1998';

console.log(str.charAt(0)); // G
```   
### 특정 문자열 위치 확인/배열의 특정 요소 위치 확인
```
// 문자열(indexOf)
const str = 'Carpe diem, seize the day';
console.log(`"e" 는 ${str.indexOf('e')} 번째 인덱스에 있습니다.`); // 4
console.log(`대문자 "C" 는 ${str.indexOf('C')} 번째 인덱스에 있습니다.`);
console.log(`소문자 "c" 는 ${str.indexOf('c')} 번째 인덱스에 있습니다.`);
console.log(`문자열 ", se" 는 ${str.indexOf(', se')} 번째 인덱스에 있습니다.`);

const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1) count++;
    });
    return count;
}

console.log(`${arr} 에 "e" 가 있는 요소는 모두 ${howManyHasE(arr)} 개 입니다.`);

// 문자열(lastIndexOf)
const str = 'Carpe diem, seize the day';

console.log(`"e" 는 ${str.lastIndexOf('e')} 번째 인덱스에 있습니다.`); // 20
console.log(`대문자 "C" 는 ${str.lastIndexOf('C')} 번째 인덱스에 있습니다.`);
console.log(`소문자 "c" 는 ${str.lastIndexOf('c')} 번째 인덱스에 있습니다.`);
console.log(`문자열 ", se" 는 ${str.lastIndexOf(', se')} 번째 인덱스에 있습니다.`);


// 배열(indexOf)
const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter', 4)}`); // 4 : 시작 
```   
### 특정 문자열 포함 여부 확인   
```
const str = 'Make your lives extradordinary';

console.log(str.includes('Make'));
console.log(str.includes('Make', 1)); // 해당 인덱스 튀치에서부터 문자열을 확인
```   
### 배열 요소를 분할/변환하기
```
const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr); // ['1', '2', '3',,,,]

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr); // [2,4,6,,,,]
```   
### 문자열을 특정 구분자에 의해 배열로 나누기   
```
const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`

capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
});
```   
### 배열 앞/뒤에 요소 추가, 추출   
```
const festa = ['mang'];
festa.push('chimmy');
festa.push('tata'); // 배열 뒤에 추가
festa.unshift('cooky'); // 배열 앞에 추가
console.log(festa.pop()); // 배열 맨 뒤의 요소 추출
console.log(festa.shift()); // 배열 맨 앞의 요소 추출

festa.forEach(name => {
    console.log(name);
});
```
### 배열에 특정 구분자를 넣어 문자형으로 변환
```
const dialogue = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you.'
];

console.log(dialogue.join('. '));
console.log(dialogue.join('.\n'));
```   
### 배열 인덱스로 특정 요소 수정
```
// splice(시작 인덱스, 삭제할 요소의 개수, 추가될 요소들)
const fruits = ['melon', 'lemon', 'source', 'apple', 'juice'];

fruits.splice(4, 1); // juice 삭제
fruits.splice(4, 0, 'grape'); // 맨 뒤에 grape 추가
fruits.splice(2, 1, 'mandarin', 'strawberry', 'watermelon'); // source 삭제 후 mandarin, strawberry, watermelon 
console.log(fruits);
```   
### 배열 순환   
```
const arr = [
    { id: 0, name: '혜림', age: 6 }, 
    { id: 1, name: '현일', age: 3 }, 
    { id: 2, name: '현아', age: 5 }, 
    { id: 3, name: '우림', age: 2 }
];

// 배열.forEach(callback 함수)
arr.forEach((el) => {
    console.log(el.name);
});
```   
### 배열 정렬/ 순서 반대로 나열
```
const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    { id: 2, name: 'Leo' }, 
    { id: 0, name: 'Daniel' }, 
    { id: 3, name: 'Asher' },
    { id: 4, name: 'Chloe' },
    { id: 1, name: 'Chloe' } 
];

// 정렬
numArr1.sort(function(a, b) { return a - b; }); // 오름차순
numArr2.sort(function(a, b) { return b - a; }); // 내림차순
objArr.sort(function(a, b) { // 이름의 속성 값으로 정렬
    if (a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    else return 0;
})

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);

// reverse
const str = 'abcdefghijklmnopqrstuvwxyz';
const arr = str.split('');
arr.reverse();

console.log(arr.join(''));
```   
### 배열 요소가 특정 조건을 만족하는지 확인   
```
const arr = [
    { id: 0, name: '혜림', age: 6 }, 
    { id: 1, name: '현일', age: 3 }, 
    { id: 2, name: '현아', age: 5 }, 
    { id: 3, name: '우림', age: 2 }
];

const isHyunAHere = arr.some(el => el.name == '현아');
const olderThanSix = arr.some(el => el.age > 6);

console.log(isHyunAHere); // true
console.log(olderThanSix); // false
```   
### 모든 배열 요소가 특정 조건을 만족하는지 확인   
```
const arr = [
    { id: 0, name: '혜림', age: 6 }, 
    { id: 1, name: '현일', age: 3 }, 
    { id: 2, name: '현아', age: 5 }, 
    { id: 3, name: '우림', age: 2 }
];

const isAllHyunA = arr.every(el => el.name == '현아');
const youngerThanSevenAll = arr.every(el => el.age < 7);

console.log(isAllHyunA); // false
console.log(youngerThanSevenAll); // true
```   
### 배열의 특정 조건을 기준으로 필터링   
```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredTwo = arr.filter(a => {
    console.log(`현재 위치의 값은 ${a} 입니다.`);
    return a % 2 == 0;
});
console.log(filteredTwo);

const filteredThree = arr.filter(a => a % 3 == 0);
console.log(filteredThree);   
```   
### 배열의 특정 조건을 충족하는 요소 찾기   
```
const arr = [
    {name: '우림', age: 2}, 
    {name: '현아', age: 5}, 
    {name: '탄이', age: 30}, 
    {name: '현일', age: 3},
    {name: '혜림', age: 6}
];

const myFriend = arr.find(a => a.age === 30);
console.log(myFriend); // {name: '탄이', age: 30}
```   
### 배열 요소 일괄 변경   
```
const arr = [
    { id: 0, name: '혜림', age: 6 }, 
    { id: 1, name: '현일', age: 3 }, 
    { id: 2, name: '현아', age: 5 }, 
    { id: 3, name: '우림', age: 2 }
];

const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el;
});

const arr3 = arr.map(el => el.name);

console.log(arr2); // [ { id: 0, name: '혜림', age: 7 }, { id: 1, name: '현일', age: 4 },,,, ]
console.log(arr3); // ['혜림', '현일',,,]
```   
### 배열 내 값을 누적시키기   
```
/*
  배열.reduce(누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
        return 누적값으로 반환되는 값
  }, 초기값);
*/
const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, el) => {
	return acc(누적된 값) + el(현재 요소 값)
}, 0);

console.log(result); // 15
```   
### 중첩된 배열을 단일하게 만들기   
```
const arr = [1, [2, 3], [4, 5, 6], ['배열', '나열하기'], 'JavaScript'];

const result = arr.reduce((acc, el) => {
    return acc.concat(el);
}, []);

console.log(result); // [1,2,3,4,5,,,]
```   
### 객체에서 키, 값만 추출하기/ 객체를 배열로 변환
```
const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

// 키 추출
const arr = Object.keys(obj);
// 값 추출
const arr = Object.values(obj);
// 객체를 배열로 변환
const modifiedObj = Object.entries(obj);

console.log(arr);
```   
### 객체를 변경되지 않도록 하기   
```
let obj = {};

obj.title = 'IDOL';
obj = Object.freeze(obj);
obj.title = 'Euphoria';

console.log(obj);

const changeUntilNum = (obj, num) => {
    'use strict';

    while(true) {
        console.log(obj);

        if (obj.age >= num) {
            obj = Object.freeze(obj);
        }
        obj.age += 1;
    }
}

let profile = { name: '지연', age: 25 };
changeUntilNum(profile, 30);
```   
### 객체에 속성 추가 못하게 만들기   
```
const album = {
    name: 'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'RM';

console.log(album);

Object.seal(album); // 객체 밀봉

album.comment = 'Answer';
album.singer = 'JK';
delete album.name;

console.log(album);
```   
### 객체 병합 확장하기   
```
const obj1 = { one: 1, two: 2, three: 3 };
const obj2 = { name: '탄이', age: 5, address: 'Seoul' };
const obj3 = { friends: ['혜림', '현아', '현일', '우림'] };

// Object.assign(반환될 객체, ... 병합될 다른 객체들)
const newObj1 = Object.assign({}, obj1);
const newObj2 = Object.assign({}, obj1, obj2);
newObj1.four = 4;

console.log(obj1);
console.log(newObj1);
console.log(newObj2);

console.log('\n');

const newObj3 = Object.assign(obj1, obj3);

console.log(obj1);
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);
```   
### 진수 변환하기   
```
const dec = 531;

const binByDex = dec.toString(2); // 2진수로 
const octByDex = dec.toString(8); // 8진수로
const hexByDex = dec.toString(16); // 16진수로

console.log(binByDex);
console.log(octByDex);
console.log(hexByDex);


// 10진수 아닌 진법을 다른 진법으로 변환
const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2); // 2진수를 10진수로
const dexByOct = parseInt(oct, 8); // 8진수를 10진수로
const dexByhex = parseInt(hex, 16); // 16진수를 10진수로
const hexByOct = parseInt(oct, 8).toString(16); // 8진수 -> 10진수 -> 16진수

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByhex);
console.log(hexByOct);
```   
### 랜덤값 구하기   
```
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i=0; i < 5; i++) {
    console.log(generateRandom(1, 10));
}
```   
### 날짜, 시간 출력   
```
// 원하는 format으로 출력
Date.prototype.yyyymmdd = function() {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ? 
                `0${this.getMonth() + 1}` : this.getMonth() + 1;
    const dd = this.getDate() < 10 ? 
                `0${this.getDate()}` : this.getDate();
    return '' + yyyy + mm + dd;
}

const date = new Date();
console.log(date.yyyymmdd());


// UTC 기준 날짜 출력
const date = new Date();
const dateUTC = Date.UTC(
	date.getUTCFullYear()
	, date.getUTCMonth()
	, date.getUTCDate()
	, date.getUTCHours()
	, date.getUTCMinutes()
	, date.getUTCSeconds()
);

console.log(new Date(dateUTC));


// 날짜 사이의 경과 시간 계산
Date.daysDiff = (date1, date2) => {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) return '';

    const d1 = date1.getTime();
    const d2 = date2.getTime();

    let diff = d2 - d1;

    const seconds = Math.floor((diff = diff / 1000) % 60);
    const minutes = Math.floor((diff = diff / 60) % 60);
    const hours = Math.floor((diff = diff / 60) % 24);
    const days = Math.floor(diff / 24);
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

var from = new Date(2000, 0, 1);
var to = new Date(from.getFullYear() + 1, from.getMonth() + 3, 
    from.getDate() + 5, from.getHours() + 4, from.getMinutes() + 30, 
    from.getSeconds() + 50);

console.log(`From   > ${from}`)
console.log(`To     > ${to}`)
console.log(Date.daysDiff(from, to));
```
### JSON   
```
// JSON을 문자열로 변환
JSON.stringify(값, 리플레이서, 공백 개수)

// JSON 문자열을 JSON으로 변환
JSON.parse(값, 리플레이서)
```
