// 프로토타입으로 function 만들기

function TestScore(name, kor, eng){
    this.userName = name;
    this.korNum = kor;
    this.engNum = eng;
}

TestScore.prototype.getTestInfo = function(){
    console.log(`이름 : ${this.userName}`);
    console.log(`국어 : ${this.korNum}`);
    console.log(`영어 : ${this.engNum}`);
}

TestScore.prototype.getAvg = function(){
    return (this.korNum + this.engNum) / 2;
}

let kimgun = new TestScore("김군", 80, 90);
let ohgun = new TestScore("오군", 100, 70);

kimgun.getTestInfo();
console.log(`평균 : ${kimgun.getAvg()}`);