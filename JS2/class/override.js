// 클래스를 선언합니다.
class LifeCycle {
    call () {
      this.a()
      this.b()
      this.c()         
    }

    a () { console.log('a() 메소드를 호출합니다.')}
    b () { console.log('b() 메소드를 호출합니다.')}
    c () { console.log('c() 메소드를 호출합니다.')}
  }

  class Child extends LifeCycle {
    // a 함수 오버라이딩  
    a () {
        // 부모 a 함수 호출
        super.a()
        console.log('자식의 a() 메소드입니다.')
      }
  }

  // 인스턴스를 생성합니다.
  new Child().call()