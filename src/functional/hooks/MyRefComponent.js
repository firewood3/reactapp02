import React, {useRef} from 'react';

const MyRefComponent = () => {
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }
    return (
        <div>
            refSample
        </div>
    );
};

export default MyRefComponent;

/*
    # 로컬 변수 사용하기
    컴포넌트의 로컬 변수를 사용해야 할 때도 useRef를 사용할 수 있다.
    여기서 로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미한다.
    ref안의 값이 바뀌어도 렌더링 되지 않는 다는 점에 로컬 변수의 사용의 의의가 있다.
    로컬 변수는 렌더링과 관련되지 않은 값을 관리할 때 사용할 수 있다.
 */
