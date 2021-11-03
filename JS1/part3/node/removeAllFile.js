'use strict';

const fs = require('fs');
const path = require('path');

// 특정 경로의 파일 또는 폴더를 삭제하는 함수
const removePath = (p, callback) => {
  fs.stat(p, (err, stats) => { // 삭제하기 전 해당 경로가 파일인지 폴더인지 확인
    if (err) return callback(err);

    if (!stats.isDirectory()) { // 경로가 파일이라면
      console.log('이 경로는 파일입니다');
      return fs.unlink(p, err => err ? callback(err) : callback(null, p)); // 해당 경로 파일 삭제
    }

    console.log('이 경로는 폴더입니다');
    fs.rmdir(p, (err) => { // 해당 경로가 폴더라면 rmdir로 폴더 삭제
      if (err) return callback(err);

      return callback(null, p);
    });
  });
};

const printResult = (err, result) => {
  if (err) return console.log(err);

  console.log(`${result} 를 정상적으로 삭제했습니다`);
};


const p = path.join(__dirname, 'js200');

try {
    // 동기 패턴 함수로 특정 폴더 안의 파일들을 배열로 반환
  const files = fs.readdirSync(p);
  if (files.length) 
    files.forEach(f => removePath(path.join(p, f), printResult)); // 폴더 안에 있는 파일들 순차적으로 삭제
} catch (err) {
  if (err) return console.log(err);
}

removePath(p, printResult); // 폴더 안의 파일들을 위에서 다 삭제한 후 해당 폴더 삭제

