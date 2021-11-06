class Pet {
    constructor (name, age) {
      this.name = name
      this.age = age
    }

    // alert, console.log를 출력하면 오버라이딩이 된 메서드로 호출됨
    toString () {
      return `이름: ${this.name}\n나이: ${this.age}살` 
    }
  }

  const pet = new Pet('구름', 6)
  alert(pet)
  console.log(pet + '')