// 배열 기반의 다중 할당
// a = 1 / b = 2
let [a, b] = [1, 2]

console.log(a, b)


let array = [1, 2, 3, 4, 5]
// c, d, e에 각각 1, 2, 3이 삽입
const [c, d, e] = array

console.log(c, d, e)

//---------------------------------------------------------------------------

// 배열 복사 1
const 물건1_200301 = ['우유', '식빵']
// 얕은 복사
const 물건1_200302 = 물건1_200301
물건1_200302.push('고구마')
물건1_200302.push('토마토')

console.log(물건1_200301)
console.log(물건1_200302)


// 배열 복사 2
const 물건2_200301 = ['우유', '식빵']
// 깊은 복사(전개연산자를 이용한 copy)
const 물건2_200302 = [...물건2_200301]
물건2_200302.push('고구마')
물건2_200302.push('토마토')

console.log(물건2_200301)
console.log(물건2_200302)


// 배열 복사 3
const 물건3_200301 = ['우유', '식빵']
// 깊은 복사
const 물건3_200302 = ['고구마', ...물건3_200301, '토마토']

console.log(물건3_200301)
console.log(물건3_200302)