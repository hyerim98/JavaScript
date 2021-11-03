function drawChart(width = 200, height = 400) { // default
    console.log(`${width} X ${height} 차트를 그립니다.`);
  }
  drawChart(100); // width : 100, height : 400
  drawChart(); //  width : 200, height : 400
  
  function drawChart2(width = 200, height = width / 2) { // default
    console.log(`${width} X ${height} 차트를 그립니다.`);
  }
  drawChart2(300); // width : 300, height : 150
  drawChart2(); //  width : 200, height : 100



  function sum(...args) { // ...args : 배열로 전달
    var total = 0;
    for (var i = 0; i < args.length; i++) {
      total += args[i];
    }
    console.log(args.indexOf(1))
    return total;
  }
  console.log(sum(1, 2, 3));
  
  function sum2(a, b, ...others) {
    var total = a + b;
    for (var i = 0; i < others.length; i++) {
      total += others[i];
    }
    return total;
  }
  console.log(sum2(1, 2));
  console.log(sum2(1, 2, 3, 4));