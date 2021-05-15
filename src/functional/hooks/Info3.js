import React from 'react';
import useInputs from "./useInputs";

const Info3 = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info3;


/*
    # 커스텀 훅을 이용한 인풋 상태관리
    여러 컴포넌트에서 비슷한 기능을 공유할 경우, 이를 여러분만의 Hook으로 작성하여 로직을 재사용할 수 있다.

    기존에 Info 컴포넌트에서 여러개의 인풋을 관리하기 위해 useReducer로 작성했던 로직을 useInputs라는
    Hook으로 따로 분리해 재사용 할 수 있다.

    # 리듀서를 이용한 인풋 상태관리
    useReducer에서의 액션은 그 어떤 값도 사용 가능하다. 그래서 이번에는 이벤트 객체가 지니고 있는
    e.target 값 자체를 액션 값으로 사용했다.
    이런 식으로 인풋을 관리하면 아무리 인풋의 개수가 많아져도 코드를 짧고 깔끔하게 유지할 수 있다.
 */
