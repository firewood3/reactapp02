import React from 'react';
import './StyleMyComponent.scss';
import classNames from "classnames";

const StyleMyComponent = ({ highlighted, theme}) => {
    return (
        <div>
            {/* classNames를 사용한 경우 */}
            <div className={classNames('StyleMyComponent', {highlighted}, theme)}>
                Hello
            </div>
            {/* classNames을 사용하지 않은 경우 */}
            <div className={`StyleMyComponent ${theme} ${highlighted ? 'highlighted' : ''}`}>
                Hello2
            </div>
            <div className={'wrapper'}>
                Hello3
            </div>
        </div>
    );
};

export default StyleMyComponent;

/*
    classNames를 쓰는 것이 가독성이 높다.
    CSS Module과 함께 사용하면 CSS Module 사용이 훨씬 쉬워진다.
    classnames에 내장되어 있는 bind 함수를 사용하면 클래스를 넣어줄 때마다
    styles.[클래스 이름] 형태를 사용할 필요가 없다. 사전에 미리 styles에서 받아 온 후
    사용하게끔 설정해 두고 cx('클래스 이름', '클래스 이름2') 형태로 사용할 수 있다.
    CSS Moudle을 사용할 때 클래스를 여러 개 설정하거나, 또는 조건부로 클래스를 설정할 때
    classnames의 bind를 사용하면 훨씬 편리하게 작성할 수 있다.

    CSS Mobule에서 글로벌 클래스를 정의할 때 :global을 사용했던 것처럼 CSS Module이 아닌
    일반 .css/.scss 파일에서도 :local을 사용하여 CSS Module을 사용할 수 있다.
    ```css
    :local .wrapper {
        background-color: #fd7e14;
    }
    :local {
      .wrapper {
        background-color: #fd7e14;
      }
    }
    ```
 */
