class Square {
    #length
    // static, private 동시에 적용 가능
    static #conuter = 0
    static get counter () {
      return Square.#conuter
    }
    constructor (length) {
      this.length = length
      Square.#conuter += 1
    }

    static perimeterOf (length) {
      return length * 4
    }
    static areaOf (length) {
      return length * length
    }
    
    get length () { return this.#length }
    get perimeter () { return this.#length * 4 }
    get area () { return this.#length * this.#length }

    set length (length) {
      if (length < 10) {
        throw '길이는 0보다 커야 합니다.'
      }
      this.#length = length
    }
  }

  // static 속성 사용하기
  const squareA = new Square(10)
  const squareB = new Square(20)
  const squareC = new Square(30)
  console.log(`지금까지 생성된 Square 인스턴스는 ${Square.counter}개입니다.`)
  // static 메소드 사용하기
  console.log(`한 변의 길이가 20인 정사각형의 둘레는 ${Square.perimeterOf(20)}입니다.`)
  console.log(`한 변의 길이가 30인 정사각형의 둘레는 ${Square.areaOf(30)}입니다.`)