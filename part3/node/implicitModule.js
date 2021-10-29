// 내장된 모듈인 'util' import하기
const util = require('util');

const name = 'Tony';
const greeting = util.format('Hello %s', name);
console.log(greeting);
