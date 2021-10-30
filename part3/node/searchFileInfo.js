"use strict";

const fs = require('fs');
const path = require('path');


const fileName = 'hello.txt';
const targetPath = path.join(__dirname, 'js200'); // targetPath : /현재 위치 경로/js200

const filePath= path.join(targetPath, fileName); // filePath : /현재 위치 경로/js200/hello.txt
console.log(path.parse(filePath)); // parse : 특정 경로의 파일 정보를 확인

// 특정 경로 내 특정 파일 여부를 확인
const isFileInPath = (path, fileName, callback) => { // path를 받아 파일정보를 탐색, fileName과 일치하는 파일명을 callback으로 반환
  // 특정 경로 안에 있는 모든 파일명을 콜백 함수의 매개변수로 전달  
  fs.readdir(path, (err, files) => { // path : 반드시 폴더를 가리켜야 한다
    if (err) return callback(err);

    let isHere = false;
    files.forEach(f => {
      if (f === fileName) isHere = true;
    });

    return callback(null, isHere); // isHere : true => fileName과 동일한 파일명이 있는 경우
                                   // isHere : false => 동일한 파일명을 찾지 못한 경우
  });
};

// js200 폴더 안에서 hello.txt 파일을 탐색
isFileInPath(path.join(__dirname, 'js200'), fileName, (err, isTrue) => {
  if (err || !isTrue) return console.log('파일을 읽을 수 없습니다');

  fs.stat(filePath, (err, fileInfo) => { // 해당 파일이 있는 경우
    if (err) return console.log(err);

    return console.log(fileInfo); // 해당 파일의 상세 정보를 확인
  });
});

