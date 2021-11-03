/*
 * 워커 스크립트
    메인 스크립트와 워커 스트립트 간의 메세지 전달은 이벤트 방식으로 동작하여 한쪽에서 postMessage 메소드로 메세지를 전달하면
    상대편의 onmessage에 등록된 콜백 함수를 통해 전달된 메시지를 받을 수 있다.
 */

function fibonacci(num) { // 피보나치 수를 계산하는 함수
    if (num <= 1) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  onmessage = function(e) { // 메인 스크립트에서 postMessage로 메세지를 전달하면 콜백 함수가 실행됨
    const num = e.data.num; // 이벤트를 인자로 전달받으면 이벤트의 data 속성을 통해 전달한 메세지에 접근할 수 있다
    console.log('메인 스크립트에서 전달 받은 메시지', e.data);
    if (num == null || num === "")  {
      throw new Error('숫자를 전달하지 않았습니다.');
    }
    const result = fibonacci(num);
    postMessage(result); // 메인 스크립트로 결과를 전달
  }