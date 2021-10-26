/*
 * closure
    - 내부함수가 외부함수의 지역변수에 접근할 수 있다
    - 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성
 */

function outter(){
    var title = 'coding everybody';  
    return function(){        
        console.log(title);
    }
}

inner = outter(); // inner : 이름이 없는 함수가 반환됨

inner(); // 원래는 outter 함수는 실행이 끝났기 때문에 이 함수의 지역변수는 소멸되는 것이 맞다
         // 클로저의 특성으로 인해 외부함수의 지역변수 title이 소멸되지 않았다