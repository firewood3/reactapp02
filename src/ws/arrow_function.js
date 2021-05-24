function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function () {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const whiteDog = new WhiteDog();
whiteDog.bark();

/*
  화살표 함수와 일반 함수의 스코프는 다르다. this를 가리키는게 다르다.
  일반함수의 this: 자신이 종속된 객체를 가리킴
  화살표함수의 this: 자신이 종속된 인스턴스를 가리킴

  리엑트에서 함수형 컴포넌트를 선언할때 일반 함수를 사용하는 것과 화살표 함수 문법을 사용하는 것간에는
  큰 차이가 없다.
 */
