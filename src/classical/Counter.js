import React, {Component} from 'react';

class Counter extends Component {
  // state를 constructor에서 꺼내기
  state = {
    number: 0,
    fixedNumber: 0
  };
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    // this.state = {
    //   number: 0,
    //   fixedNumber: 0
    // };
  }

  render() {
    const {number, fixedNumber} = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState({number: number + 1});
          }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

/*
  클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 한다.
  이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자
  함수를 호출해 준다.
 */
