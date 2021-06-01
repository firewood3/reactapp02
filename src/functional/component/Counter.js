import React, {useState} from 'react';

const Counter = () => {
  const [state, setState] = useState({number: 0, fixedNumber: 0});
  const plusHandler = () => {
    // 2씩 증가하지 않음
    // setState({...state, number: state.number+1});
    // setState({...state, number: state.number+1});

    // 2씩 증가하지 않음
    // setState((prevState, ff) => {
    //   console.log(prevState)
    //   return {
    //     ...state,
    //     number: state.number+1
    //   }
    // });
    // setState((prevState) => {
    //   console.log(prevState)
    //   return {
    //     ...state,
    //     number: state.number+1
    //   }
    // });

    // 2씩 증가
    setState((prevState) => {
      return {
        ...prevState,
        number: prevState.number+1
      }
    });
    setState((prevState) => {
      return {
        ...prevState,
        number: prevState.number+1
      }
    });
  }

  return (
    <div>
      <h2>fixedNumber : {state.fixedNumber}</h2> <br/>
      <h2>{state.number}</h2><br/>
      <button onClick={plusHandler}>
        플러스
      </button>
    </div>
  );
};

export default Counter;
