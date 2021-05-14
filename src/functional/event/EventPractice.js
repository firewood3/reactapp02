import React, {useState} from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => {
        console.log(e)
        setUsername(e.target.value);
    }
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ": " + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;

/*
## 이벤트를 사용할 떄 주의사항

1. 이벤트 이름은 카멜 표기법으로 작성한다.
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
3. DOM 요소에만 이벤트를 설정할 수 있다.
    - DOM 요소에만 이벤트를 설정할 수 있지만 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할수 없다.

## 이벤트 종류
https://reactjs.org/docs/events.html
Clipboard
Composition
Keyboard
Focus
Form
Mouse
Selection
Touch
UI
Wheel
Media
Image
Animation
Transition
 */
