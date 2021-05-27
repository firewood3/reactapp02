var Person = (function () {
  // 생성자함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log('Hi! My name is ' + this.name);
  }

  // 생성자 함수 반환
  return Person;
}());

var me = new Person('Lee');
me.sayHi();
