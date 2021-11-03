// nodeJS의 module
const greet = require('./greet.js');

greet('JavaScript 200');

// eventEmiiter1
const Emitter1 = require('./eventEmitter1');
const em1 = new Emitter1();

em1.on('greet', () => { // key, 콜백함수 전달
    console.log('Hello First');
});

em1.on('greet', () => { // key, 콜백함수 전달
    console.log('Hello Second');
});

em1.emit('greet'); // 콜백 함수들 호출


// eventEmiiter2
const Emitter2 = require('events'); // 내장 모듈 불러옴
const eventConfig = require('./eventEmitter2').events;

const em2 = new Emitter2();

em2.on(eventConfig.GREET, () => {
    console.log('Somewhere, someone said heelo.');
});

em2.on(eventConfig.GREET, () => {
    console.log('A Greeting occurred!');
});

em2.emit(eventConfig.GREET);