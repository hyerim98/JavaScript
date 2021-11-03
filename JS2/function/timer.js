let id;
let count = 0;

// 지정한 시간마다 실행
id = setInterval(() => {
    console.log(`1초마다 실행됩니다. (${count}번째)`);
    count++;
}, 1000);

// 지정한 시간 후에 실행
setTimeout(() => {
    console.log('타이머를 종료합니다.');
    /*
     *  clearTimeout() : setTimeout() 타이머를 종료
     *  clearInterval() : setInterval() 타이머를 종료
     */
    clearInterval(id);
}, 5000);
