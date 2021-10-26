// 내보내기
export function hello(name) {
  console.log(`hello ${name}`);
}


// default : 하나의 모듈에서 한 번만 사용가능
export default class Hello {
  constructor(greeting) {
    this.greeting = greeting;
  }
  hi(name) {
    console.log(`${this.greeting} ${name}`);
  }
}



export const version = 'v1.0'

export var personA = {
  name: 'a'
};

export function add(a, b) {
  return a + b;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}