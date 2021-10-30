const cheerio = require('cheerio'); // npm install cheerio
const request = require('request'); // npm install request
const fs = require('fs');

// example.html 사이트 정보를 탐색
fs.readFile('./example.html', (err, data) => {
  if (err) return console.log(err);

  const $ = cheerio.load(data);

  console.log($('#body', '#html').find('li').length);
  console.log($('.son', '#people').text());
});

// https://ko.wikipedia.org/wiki/HTML 사이트의 HTML 문서를 읽는다
request('https://ko.wikipedia.org/wiki/HTML', (err, res, html) => {
  if (err) return console.log(err);
  if (res && res.statusCode >= 400) return console.log(res.statusCode);

  const $ = cheerio.load(html);
  console.log($('div[class=toc]').children().find('a').text()); // div 태그에 클래스명이 toc인 요소를 찾는다
                                                                // 그리고 해당 요소 선택자의 자식 노드들 중에서 a태그인 모든 요소를 찾아서 a 태그 각 요소에 있는 텍스트 정보를 한꺼번에 콘솔 출력
});
