var kim = {name:'kim', first:10, second: 20};
var lee = {name:'lee', first:10, second: 10};

function sum(prefix) {
    return prefix + (this.first+this.second);
}

/*
   # bind 묶는다.
   sum 함수가 호출될때마다 this를 바꾸는 것이 아니라
   내부적으로 사용할 this를 고정시킨 새로운 함수를 만들어 낸다.
 */

var kimSum = sum.bind(kim, '=> ');
console.log(kimSum());
