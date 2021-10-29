"use strict";

const cbFunc = (err, result) => { // 비동기 함수에서 콜백으로 사용할 함수 정의(result : 결과값)
    if (err && err instanceof Error) return console.error(err.message); // error가 발생하면 에러 출력
    if (err) return console.error(err);

    console.log('에러를 반환하지 않습니다', result); // err가 발생하지 않으면 결과값인 result를 출력
};

const asyncFunction = (isTrue, callback) => { // 비동기 함수를 선언
    const err = new Error('This is error!!'); // Error 객체 생성 시 'This is error!!' 문자열은 Error 객체의 message 속성으로 값이 할당됨

    if (isTrue) return callback(null, isTrue); // 에러 정보 : null
    else return callback(err); // 에러 정보 : err
};


asyncFunction(true, cbFunc);
asyncFunction(false, cbFunc);


// 내장 모듈을 사용하여 예외 처리

const fs = require('fs'); // 파일 시스템과 관련된 모듈을 불러옴

try {
    const fileList = fs.readdirSync('/undefined/');
    fileList.forEach(f => console.log(f)); // 파일 정보 출력
} catch (err) {
    if (err) console.error(err); // 발생한 에러 출력
}