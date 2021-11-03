let user = {
    name: "jeado"
  };
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log(descriptor);
  
  let user2 = {};
  Object.defineProperty(user2, "name", { // "name"부분의 객체의 속성을 정의
    value: "jeado", // 값
    enumerable: true, // for...in 루프나 Object.keys 메소드같이 속성을 나열할 때 나열 가능 여부 정의(false : 나열X)
    configurable: true, // 속성 기술자를 변경할 수 있는 여부 정의(false : 속성 기술자 변경X)
    writable: false // 값을 변경할 수 있는 여부 정의(false : 값 변경X)
  });
  console.log(user2.name);
  user2.name = "bbo";
  console.log(user2.name);
  
  let user3 = {
    name: "jeado",
    toString() {
      return this.name;
    }
  };
  Object.defineProperty(user3, "toString", { // "toString"부분의 객체의 속성을 정의
    enumerable: false
  });
  for (let key in user3) {
    console.log(key);
  }
  
  let user4 = {};
  Object.defineProperty(user4, "name", {
    value: "jeado",
    configurable: false
  });
  delete user4.name
  console.log(user4);
  Object.defineProperty(user4, "name", {
    writable: true
  });