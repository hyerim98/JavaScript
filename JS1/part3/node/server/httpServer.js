const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// 웹 서버 객체 생성
const server = http.createServer((req, res) => {
    res.statusCode = 200; // 서버가 요청을 정상적으로 처리했다는 의미
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello! Node.js HTTP Server'); // 모든 응답 헤더와 본문이 전송되었음을 서버에 알린다
});

server.listen(port, hostname, () => { // 지정한 호스트 포트번호로 HTTP 서버를 실행하여 연결을 수신받는다
    console.log(`Server running at http://${hostname}:${port}/`);
});