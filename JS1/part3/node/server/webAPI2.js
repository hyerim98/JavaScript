"use strict";

const http = require('http');
const qs = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'POST':
      let body = '';

      req.on('data', (chunk) => { // 'data'라는 이벤트
        body += chunk;
      });
      req.on('end', () => { // 요청 전송이 완료되는 시점의 이벤트
        const obj = qs.parse(body); // 'data' 이벤트로 수집된 문자열 body 변수를 객체 형식으로 파싱
        res.writeHead(200); // 정상 전달 완료이면 200 반환
        res.end(JSON.stringify(obj));
      });
      req.on('error', (err) => { // 'error' 이벤트
        console.error(err.stack);
      });
      break;
    default:
      res.end();
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});