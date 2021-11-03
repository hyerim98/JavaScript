"use strict";

const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'js200', 'hello.txt');

fs.open(filePath, 'r', (err, fd) => { // 'r' : 특정 파일을 읽는 것이 가능한지 확인
  if (err && err.code === 'ENOENT') return console.log('읽을 수 없는 파일입니다'); // ENOENT : 찾는 파일이 존재하지 않는다
  if (err) return console.log(err);

  console.log('파일을 정상적으로 읽을 수 있습니다');

  // 비동기 패턴 함수 : 콜백 함수를 통해 결과값 반환
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return console.log(err);

    console.log(data);
  });

  try {
    // 동기 패턴 함수 : 콜백 함수없이 결과값을 반환
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});