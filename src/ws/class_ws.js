class MyClass {
  names = 'hong'
  constructor() {
  }

  static defaultProps = {
    name: '기본 이름'
  };
  say () {
    console.log('hello')
  }

}

let myClass = new MyClass();
console.log(MyClass.defaultProps.name);
console.log(myClass.names);
console.log(myClass);
myClass.say()

function Person(name) {
  this.name = name;
}

const person = new Person('jame');
console.log(person.name);
person.name = '11';
console.log(person.name);

/*
  클래스 필드 (class field)
  자바의 클래스 필드는 마치 클래스 내부에서 변수처럼 사용된다.
  자바에서는 this를 생략해도 클래스 필드를 참조할 수 있다.
  자바스크립트에서는 클래스에서 인스턴스 프로퍼티를 참조하려면 반드시 this를 참조해야한다.

  자바스크립트의 클래스 몸체에서는 메서드만 선언할 수 있다.
  하지만 Chrome 72이상, Node.js 버전 12이상에서는
  다음과 같이 클래스 필드를 클래스 몸체에 정의할 수 있다.
 */
