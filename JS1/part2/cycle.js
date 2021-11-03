// 문자열 순환
const str = "hello";

for (const item of str) {
    console.log(item);
}

const iter = str[Symbol.iterator](); // String 객체는 반복 가능한 객체이기 때문에 Symbol.iterator 메소드를 가지고있다.
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// 배열 순환
const products = [{ name: "가방" }, { name: "노트북" }];

for (const item of products) {
    console.log(item.name);
}

const it = products[Symbol.iterator](); // Array 객체는 반복 가능한 객체이기 때문에 Symbol.iterator 메소드를 가지고있다.
console.log(it.next());
console.log(it.next());
console.log(it.next());