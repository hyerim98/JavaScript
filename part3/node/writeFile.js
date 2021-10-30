"use strict";

const fs = require('fs');
const path = require('path');

// file을 새로 생성
const makeFile = (path, callback) => {
    // fs.writeFile(path 경로값, 파일 내용, 파일 인코딩 정보, 콜백 함수)
    fs.writeFile(path, 'New file, New content', 'utf8', (err) => {
        if (err) return callback(err);

        console.log('파일이 생성됐습니다.');
        callback(null);
    });
};

// 기존 파일에 내용을 추가
const appendFile = (path, callback) => {
    fs.appendFile(path, '\nUpdate file', (err) => {
        if (err) return callback(err);

        console.log('파일 내용을 추가합니다.');
        callback(null);
    })
};

const printErrIfExist = (err) => { // 에러가 있는 경우에만 콜솔 출력
    if (err) console.log(err);
};


const filePath = path.join(__dirname, 'js200', 'hello.txt'); // filePath : 현재 실행 위치/js200/hello.txt

// 특정 경로의 파일 또는 폴더의 존재 여부를 확인하기 위해 사용됨
fs.open(filePath, 'wx', (err, fd) => { // 'wx' : 쓰기 접근 권한 확인
    if (err && err.code === 'EEXIST') // EEXIST : 동일한 파일이 있을 때
        return appendFile(filePath, (err) => printErrIfExist(err)); // 파일의 내용만 추가
    if (err) return callback(err);

    return makeFile(filePath, (err) => printErrIfExist(err)); // 파일이 기존에 없는 경우 새로운 파일 생성
});