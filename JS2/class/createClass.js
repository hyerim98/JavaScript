class Student {
    constructor (이름, 국어, 영어, 수학, 과학) {
      this.이름 = 이름
      this.국어 = 국어
      this.영어 = 영어
      this.수학 = 수학
      this.과학 = 과학
    }

    getSum () {
      return this.국어 + this.영어 + this.수학 + this.과학
    }
    getAverage () {
      return this.getSum() / 4
    }
    toString () {
      return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`
    }
  }
  // 객체를 선언합니다.
  const students = []
  students.push(new Student('구름', 87, 98, 88, 90))
  students.push(new Student('별이', 92, 98, 96, 88))
  students.push(new Student('겨울', 76, 96, 94, 86))
  students.push(new Student('바다', 98, 52, 98, 92))

  //출력합니다.
  let output = '이름\t총점\t평균\n'
  for (const s of students) {
    output += s.toString()
  }
  console.log(output)