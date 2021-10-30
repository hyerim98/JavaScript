"use strict";

const fs = require('fs');

// 현재 경로에서 정상적으로 새로운 폴더를 생성 가능한지를 확인하는 함수
const checkDir = (path, callback) => { // 명시한 경로의 파일 또는 폴더의 정보를 확인하는 함수
  fs.stat(path, (err, stats) => { // fs.stat : 대입된 path 경로값의 파일 존재 여부를 확인(파일에 직접 접근할 때에는 해당 모듈 권장하지 않는다)
                                  // 확인된 결과값은 fs.stat 클래스로 래핑되어 콜백 함수로 전달(isFile(), isDirectory(), isFIFO()로 파일 정보 제공)
    if (err && err.code === 'ENOENT') return callback(null, true); // 해당 경로에 어떤 파일도 존재하지 않은 경우 에러가 발생 하지만,
                                                                   // 파일 생성할 때에는 이 상태가 적합한 것이기 때문에 true를 전달하는 것이 맞다
    if (err) return callback(err);

    // 에러없이 파일 정보를 가져옴
    return callback(null, !stats.isDirectory()); // isDirectory()가 true : 이미 동일한 폴더가 있다라는 의미
  });
};

const currentPath = __dirname; // 현재 위치 경로
let path = `${currentPath}/js200`;

checkDir(path, (err, isTrue) => {
  if (err) return console.log(err);

  if (!isTrue) { // 동일한 이름의 폴더가 있는 경우 폴더명을 다른 이름으로 변경
    console.log('이미 동일한 디렉토리가 있습니다. 디렉토리명을 변경합니다.');
    path = `${currentPath}/js200-new`;
  }

  fs.mkdir(path, (err) => {
    if (err) console.log(err);

    console.log(`${path} 경로로 디렉토리를 생성했습니다.`);
  });
});
