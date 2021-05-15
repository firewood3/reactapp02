import React, {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info2 = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };

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

export default Info2;


/*
    # 리듀서를 이용한 인풋 상태관리
    useReducer에서의 액션은 그 어떤 값도 사용 가능하다. 그래서 이번에는 이벤트 객체가 지니고 있는
    e.target 값 자체를 액션 값으로 사용했다.
    이런 식으로 인풋을 관리하면 아무리 인풋의 개수가 많아져도 코드를 짧고 깔끔하게 유지할 수 있다.
 */
