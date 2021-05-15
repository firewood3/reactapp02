import React, {useCallback, useMemo, useRef, useState} from 'react';
import _ from 'lodash';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []) ; // 컴포넌트가 처음 랜더링될 때만 함수 생성

    const onInsert = useCallback( e => {
        const num = parseInt(number);
        if (_.isNaN(num)) {
            setNumber('');
            // inputEl.current가 실제 엘리먼트이다.
            inputEl.current.focus();
            return;
        }
        const nextList = list.concat(num);
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onInsert();
        }
    };

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} onKeyPress={onKeyPress} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;

/*
    # useRef
    useRef Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해준다.
    Average 컴포넌트에서 등록 버튼을 눌렀을 때 포커스가 인풋 쪽으로 넘어가도록 코드를 작성해 보자.

    useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킨다.

    # 리액트 컴포넌트 안에서는 id 사용을 지양하는 이유
    리액트 컴포넌트 안에서도 id를 사용할 수는 있다. JSX 안에서 DOM에 id를 달면 해당 DOM을 렌더링할 때
    그대로 전달된다. 하지만 특수한 경우가 아니면 사용을 권장하지 않는다. 예를 들어 같은 컴포넌트를 여러 번 사용한다고
    가정해보자. HTML에서 DOM의 id는 유일(unique)해야 하는데, 이런 상황에서는 중복 id를 가진 DOM이 여러개 생기니
    잘못된 사용이다. ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 생기지 않는다.
    대부분은 id를 사용하지 않고도 원하는 기능을 구현할 수 있지만, 다른 라이브러리나 프레임워크와 함께 id를 사용해야 하는
    상황이 발생할 수 있다. 어런 상황에서는 컴포넌트를 만들 때마다 id 뒷부분에 추가 텍스트를 붙여서(ex: button01, button02,
    button03...) 중복 id가 발생하는 것을 방지해야 한다.

    # DOM에 직접적으로 접근해야하는데 이를 위해 ref를 사용한다.
    - 특정 input에 포커스를 주어야 하는 경우
    - 스크롤 박스 조작하는 경우
    - Canvas 요소에 그림 그리기 등
 */
