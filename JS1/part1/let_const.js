
/*
 * let
    - 블록 단위로 스코프 정의
 */
if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
  }
  console.log(functionScopeValue); // 전역변수
  console.log(blockScopeValue); // 지역변수


  /*
   * const
      - 블록 단위로 스코프 정의
      - 선언 시 값을 할당해야함
      - 이후에 재할당 불가
   */
  const CONST_USER = { name: 'jay', age: 30 };
  console.log(CONST_USER.name, CONST_USER.age);
  CONST_USER.name = "jay2";
  CONST_USER.age = 31;
  console.log(CONST_USER.name, CONST_USER.age);
  CONST_USER = { name: 'bbo' };