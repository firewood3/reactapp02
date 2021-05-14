import React, {useState} from 'react';
import './ValidationSample.css';

const ValidationSample = () => {
    const [validation, setValidation] = useState({
        password: '',
        clicked: false,
        validated: false
    });

    const handleChange = (e) => {
        setValidation({
            ...validation,
            password: e.target.value
        });
    }

    const handleButtonClick = () => {
        setValidation({
            ...validation,
            clicked: true,
            validated: validation.password === '0000'
        })
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            handleButtonClick();
        }
    };

    return (
        <div>
            <div className="success">
                dd
            </div>
            <input
                type="password"
                value={validation.password}
                onChange={handleChange}
                onKeyPress={onKeyPress}
                className={validation.clicked ? (validation.validated ? 'success' : 'failure') : ''}
            />
            <button onClick={handleButtonClick}>검증하기</button>
        </div>
    );
};

export default ValidationSample;

/*
# DOM에 직접적으로 접근해야하는데 이를 위해 ref를 사용한다.
- 특정 input에 포커스를 주어야 하는 경우
- 스크롤 박스 조작하는 경우
- Canvas 요소에 그림 그리기 등
 */
