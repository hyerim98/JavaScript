const map = new Map();

map.set('one', 1);
map.set('two', 2);

console.log(map.size);

console.log(map.get('one'));
console.log(map.has('one'));
map.delete('one');

console.log(map.has('one'));
console.log(map.has('two'));


// Map 객체 요소 나열
const m = new Map();

m.set('one', 1);
m.set('two', 2);
m.set('three', 3);

const keys = m.keys();
const values = m.values();
const entries = m.entries();

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(values);
console.log(entries);


// Map 객체 순환
const ma = new Map();

ma.set('one', 1);
ma.set('two', 2);

console.log('키 정보만 출력합니다');
for (let k of ma.keys()) {
    console.log(k);
}

console.log('값 정보만 출력합니다');
for (let val of ma.values()) {
    console.log(val);
}

console.log('[for..of, entries] 키,값 정보를 동시에 출력합니다');
for (let [k, val] of ma.entries()) {
    console.log(`키는 ${k}, 값은 ${val} 입니다`);
}
console.log('[for..of] 키,값 정보를 동시에 출력합니다');
for (let [k, val] of ma) {
    console.log(`키는 ${k}, 값은 ${val} 입니다`);
}
console.log('[forEach] 키,값 정보를 동시에 출력합니다');
map.forEach((val, k) => {
    console.log(`키는 ${k}, 값은 ${val} 입니다`);
})


const p = new Map();

for (let num of [1, 2, 3, 4, 5]) {
    p.set((value) => value * 2, num);
}

for (let [func, value] of p) {
    console.log(func(value));
}