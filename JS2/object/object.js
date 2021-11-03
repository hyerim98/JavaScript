// 객체 기반의 다중 할당
const object = {
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
}

// 선언되어있는 변수와 같은 이름이어야 출력됨
const { name, price } = object
console.log('# 속성 이름 그대로 꺼내서 출력하기')
console.log(name, price)
console.log('')

const { a=name, b=price } = object
console.log('# 다른 이름으로 속성 꺼내서 출력하기')
console.log(a, b)


//------------------------------------------------

// 객체 복사 1
const 구름1 = {
    이름: '구름1',
    나이: 6,
    종족: '강아지'
}
// 얕은 복사
const 별1 = 구름1
별1.이름 = '별1'
별1.나이 = 1

console.log(JSON.stringify(구름1))
console.log(JSON.stringify(별1))

// 객체 복사 2
const 구름2 = {
    이름: '구름2',
    나이: 6,
    종족: '강아지'
}
// 깊은 복사(전개 연산자를 이용한 깊은 복사)
const 별2 = {...구름2}
별2.이름 = '별2'
별2.나이 = 1

console.log(JSON.stringify(구름2))
console.log(JSON.stringify(별2))

// 객체 복사 3
const 구름3 = {
    이름: '구름3',
    나이: 6,
    종족: '강아지'
}
// 깊은 복사
const 별3 = {
    ...구름3, // ...구름3이 앞에 있냐 뒤에 있냐에 따라 값이 달라짐(데이터를 덮어쓰기 때문)
    이름: '별3',
    나이: 1,
    예방접종: true
}

console.log(JSON.stringify(구름3))
console.log(JSON.stringify(별3))