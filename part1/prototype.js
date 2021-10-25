function Storage() { // Storage 생성자 함수를 정의
    this.dataStore = {}; 
  }
  Storage.prototype.put = function(key, data) { // put : 주어진 키에 해당하는 값을 dataStore 속성에 할당
    this.dataStore[key] = data;
  }
  Storage.prototype.getData = function(key) { // getData : 매개변수의 값을 키로 해서 dataStore 속성에서 찾아 반환
    return this.dataStore[key];
  }
  
  const productStorage = new Storage();
  productStorage.put('id001', { name: '키보드', price: 2000 });
  console.log(productStorage.getData('id001'));
  
  function RemovableStorage() {
    Storage.call(this); // 생성자 함수의 this에 Storage 생성자 함수에서 정의한 대로 dataStore가 속성으로 추가됨
  }
  RemovableStorage.prototype = Object.create(Storage.prototype); // Object.create() : 주어진 인자를 __proto__에 연결한 새로운 객체를 반환, 간단히 상속 관계를 형성할 수 있다.
  RemovableStorage.prototype.removeAll = function() { // RemovableStorage 생성자 함수의 프로토타입 객체에 removeAll 메소드를 추가
    this.dataStore = {}
  }
  const productStorage2 = new RemovableStorage();
  productStorage2.put('id001', { name: '키보드', price: 2000 });
  productStorage2.removeAll();
  const item2 = productStorage2.getData('id001');
  console.log(item2);