var kim = {name:'kim', first:10, second: 20};
var lee = {name:'lee', first:10, second: 10};

// lee는 부모 kim은 자식이다.
lee.__proto__ = kim

function sum(prefix) {
    return prefix + (this.first+this.second);
}

// sum 객체를 실행시키는 것이다. sum();과 같다.
// 모든 함수는 call()이라는 메소드를 가지고 있다.
// 첫번 째 인자는 this가 된다. 두번쨰 인자부터는 우리가 호출하려고 하는 인자값들이 들어간다.
// this에 따라 다르게 작동한다. 컨텍스트에 따라 다르게 작동한다.
let result = sum.call(kim, '=> ');
console.log(result);
