function moduleTest (x, y) {
    return x + y;
  }
  
  // module.exports를 통해 moduleTest 함수를 외부에서 접근가능한 모듈로 공개
  module.exports = moduleTest;