// 사각형 클래스
class Square {
    // 해당 속성을 private 속성으로 사용하겠다고 미리 선언
    #length

    constructor (length) {
      if (length <= 0) {
        throw '길이는 0보다 커야 합니다.'
      }
      this.#length = length
    }
    getPerimeter () { return 4 * this.#length }
    getArea () { return this.#length * this.#length }
  }

  // 클래스 사용하기
  const square = new Square(10)
  square.#length = -10 // length에 음수가 들어가는 것을 방지
  console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
  console.log(`정사각형의 넓이: ${square.getArea()}`)