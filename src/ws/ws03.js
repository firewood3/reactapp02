const taggedVar = `hello ${{foo: 'bar'}} ${()=>'world'}`;
console.log(taggedVar)

function tagged(...args) {
  console.log(args);
}
tagged`hello ${{foo: 'bar'}} ${()=>'world'}`;



/*
  # Tagged 템플릿 리터럴
  앞에서 작성한 코드를 확인해 보면, 스타일을 작성할 때 `을 사용하여 만든 문자열에
  스타일 정보를 넣어 주었다. 여기서 사용한 문법은 Tagged 템플릿 리터럴이라고 부른다.
  CSS Module을 배울 때 나온 일반 템플릿 리터럴과 다른 점은 템플릿 안에 자바스크립트 객제나
  함수를 전달할 때 온전히 추출할 수 있다는 것이다.

  템플릿에 객체를 넣거나 함수를 넣으면 형태를 잃어버리게 된다. 객체는 "[object Object]" 로 변환되고,
  함수는 함수 내용이 그대로 문자열화되어 나타난다.

  만약 tagged 함수를 작성하고 나서 해당 함수 뒤에 템플릿 리터럴을 넣어 준다면, 템플릿 안에 넣은 값을
  온전히 추출할 수 있다.

  Tagged 템플릿 리터럴을 사용하면 이렇게 템플릿 사이사이에 들어가는 자바스크립트 객체나 함수의 원본 값을
  그대로 추출할 수 있다. styled-components는 이러한 속성을 하용하여 styled-components로 만든 컴포넌트의
  props를 스타일 쪽에서 쉽게 조회할 수 있도록 해준다.
 */
