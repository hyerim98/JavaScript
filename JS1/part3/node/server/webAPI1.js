"use strict";

const http = require('http');
// url을 문자열처럼 사용하기 위해 모듈 불러오기
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(200);
        res.end('Hello! Node.js HTTP Server');
      } else if (req.url.substring(0, 5) === '/data') {
          // url.parse : url 객체를 반환
          // true : url 객체의 query를 json 형태로 받을 수 있음
        const queryParams = url.parse(req.url, true).query; // queryParams : url 파라미터

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.write('<html><head><title>JavaScript 200제</title></head>'); // 응답 본문으로 보낸다

        for (let key in queryParams) {
          res.write(`<h1>${key}</h1>`);
          res.write(`<h2>${queryParams[key]}</h2>`);
        }

        res.end('</body></html>');
      }
      break;
    default:
      res.end(); // 응답 전송을 바로 완료 처리
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});