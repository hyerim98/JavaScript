// 정사각형 클래스
class Square {
    #length

    constructor (length) {
      this.length = length
    }

    get length () {
      return this.#length
    }
    
    get perimeter () {
      return this.#length * 4
    }

    get area () {
       return this.#length * this.#length
    }
    set length (length) {
      if (length <= 0) {
        throw '길이는 0보다 커야 합니다.'
      }
      this.#length = length
    }
  }

  // 클래스 사용하기
  const squareA = new Square(10)
  // set, get 함수를 사용 => 속성을 사용하는 형태로 사용하면, 자동으로 getter와 setter를 호출
  console.log(`한 변의 길이: ${squareA.length}`)
  console.log(`둘레: ${squareA.perimeter}`)
  console.log(`넓이: ${squareA.area}`)

  // 예외 발생시키기
  const squareB = new Square(-10)