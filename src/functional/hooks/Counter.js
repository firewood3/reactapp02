import React, {useState} from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={()=> setValue(value + 1)}>+1</button>
            <button onClick={()=> setValue(value - 1)}>-1</button>
        </div>
    );
};

export default Counter;

/*
    useState는 가장 기본적인 Hook이며, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
    useState 이 함수가 호출되면 배열을 반환하는데 철번째 원소는 상태값, 두 번째 원소는 상태를 설정하는 함수이다.

    useState를 여러번 사용하기
    하나의 useState 함수는 하나의 상태값만 관리할 수 있다. 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러번 사용하면 된다.
 */
