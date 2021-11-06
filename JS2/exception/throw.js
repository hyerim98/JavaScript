// 예외 강제 발생

function divide(a, b) {
    if (b === 0) {
        // 단순하게 예외를 발생시킴
      throw '0으로는 나눌 수 없습니다.'
    }
    return a / b
  }

  console.log(divide(10, 2))
  console.log(divide(10, 0))



  function test(object) {
    if (object.a !== undefined && object.b !== undefined) {
      console.log(object.a + object.b)
    } else {
        // 조금 더 자세하게 예외를 발생시킴
      throw new Error("a 속성과 b 속성을 지정하지 않았습니다.")
    }
  }

  test({})