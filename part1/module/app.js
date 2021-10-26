// 가져오기 : 가져 온 데이터는 오직 읽기만 가능

/*
 * default export
    - import Hello from './hello.js';
 * named export
    - import { Hello } from './hello.js';
 * variety import
    - import './hello.js'; : hello.js 파일에 있는 모든 것 사용 가능
    - import * as hi from './hello.js' : hello.js 파일에 있는 것은 hi.version 이런식으로 별명을 앞에다 붙이고 사용 가능
 */

import { hello } from './hello.js';
import Hello from './hello.js';
import { version as ver, add, Person } from './hello.js';

hello('es6 module');

let harin = new Hello('반가워요');
harin.hi('harin');

console.log(add(1,2));

let hr = new Person('hyerim');
console.log(hr.name);

// 별명으로 불러오기
console.log(ver);

