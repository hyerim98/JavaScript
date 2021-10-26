const s = new Set();

s.add('one');
s.add('two');
s.add('three');

console.log(s.size);

console.log(s.has('one'));
s.delete('one');
console.log(s.has('one'));
console.log(s.has('two'));

s.clear();

// set객체로 array 중복 요소 없애기
const arr = ['one', 'two', 'three', 'two', 'one', 'four'];
const ss = new Set(arr);
console.log([...ss]); // 배열 형태로 출력


// set 객체 값 나열
s.add('one');
s.add('two');
s.add('three');

const keys = s.keys();
const values = s.values();
const entries = s.entries();

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(values);
console.log(entries);

s.clear();


// set 객체 순환
s.add('one');
s.add('two');

console.log('키 정보만 출력합니다');
for (let key of s.keys()) {
    console.log(key);
}

console.log('값 정보만 출력합니다');
for (let value of s.values()) {
    console.log(value);
}

console.log('[for..of, entries] 키,값 정보를 동시에 출력합니다');
for (let [key, value] of s.entries()) {
    console.log(`키는 ${key}, 값은 ${value} 입니다`);
}
console.log('[forEach] 키,값 정보를 동시에 출력합니다');
s.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value} 입니다`);
})