/*
 * Promise : 비동기 처리
    * 상태
    - Pending(대기중) : 아직 결과가 없는 상태
    - Fulfilled(이행됨) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태
    - Rejected(거부됨) : 비동기 처리가 실패한 상태

    * 메소드
    - then(onFulfilled, onRejected) : 약속이 완료됐을 때 호출될 함수들을 정의
        - onFulfilled : 약속이 성공적으로 이행됐을 때
        - onRejected : 거부됐을 때
    - catch(onRejected) : 약속이 거부됐을 때 호출될 함수를 등록
 */

    function promiseForHomework(mustDo) {
        return new Promise((resolve, reject) => {  // Promise 생성
          setTimeout(() => { // 3초 후 실행
            console.log('doing homework');
            if(mustDo) { // Promise의 성공과 실패를 결정한다
              resolve({
                result: 'homework-result'
              });
            } else {
              reject(new Error('Too lazy!'));
            }
          }, 3000);
        });
      };
      
      const promiseA = promiseForHomework(true);
      console.log('promiseA created', promiseA);
      
      const promiseB = promiseForHomework();
      console.log('promiseB created');
      
      promiseA.then(v => console.log(v));
      promiseB
        .then(v => console.log(v))
        .catch(e => console.error(e));




    // Promise 조합
    function doJob(name, person) {
        return new Promise((resolve, reject) => {  
          setTimeout(() => {
            if(person.stamina > 50) {        
              resolve({
                result: `${name} success`,
                loss: 30
              });
            } else {
              reject(new Error(`${name} failed`));
            }
          }, 1000);
        });
      };
      
      const harin = { stamina: 100 };
      
      doJob('work', harin)
        .then(v => {
          console.log(v.result);
          harin.stamina -= v.loss;
          return doJob('study', harin);
        })
        .then(v => {
          console.log(v.result);
          harin.stamina -= v.loss;
          return doJob('work', harin);
        })
        .then(v => {
          console.log(v.result);
          harin.stamina -= v.loss;
          return doJob('study', harin);
        })
        .catch(e => console.error(e));