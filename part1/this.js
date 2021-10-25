this.valueA = 'a'; // this를 전역에서 사용하면 window객체를 가리킨다 => window.valueA
console.log(valueA);
valueB = 'b';
console.log(this.valueB);

function checkThis() {
  console.log(this); // Window를 가리킴
}
function checkThis2() {
  "use strict"; // 함수 내의 코드를 엄격한 모드로 실행하면
  console.log(this); // undefined
}
checkThis();
checkThis2();

function Product(name, price) {
  this.name = name;
  this.price = price;
}
const product1 = Product('가방', 2000); // new 카워드 없이 호출괴면 this는 Window를 가리킨다
console.log(window.name);
console.log(window.price);

const product2 = {
  name: '가방2',
  price: 3000,
  getVAT() {
    return this.price / 10;
  }
}
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);

const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log(VAT2);

const newCalVAT = calVAT.bind(product2);
const VAT3 = newCalVAT();
console.log(VAT3);

const counter1 = {
  count: 0,
  addAfter1Sec() {
      const me = this;
    setTimeout(function() {
      me.count += 1;
      console.log(this.count);
    },1000)
  }
};
counter1.addAfter1Sec();

const counter2= {
  count: 0,
  addAfter1Sec() {
    setTimeout(() => {
      this.count += 1;
      console.log(this.count);
    }, 1000)
  }
};
counter2.addAfter1Sec();