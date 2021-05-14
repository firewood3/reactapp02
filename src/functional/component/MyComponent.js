import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
    const {name, children} = props;
    /*
        자식 컴포넌트에서는 props를 직접 변경할 수 없다.
        변경하려면, 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면서 props를 변경하도록 하면 된다.
     */
    // props.name = "3333";
    return (
        <div>
            안녕하세요, 제 이름은 {props.name} 입니다. <br/>
            children 값은 {props.children} 입니다.<br/>
            제가 좋아하는 숫자는 {props.favoriteNumber} 입니다.<br/>

            <div>
                새로운 div 입니다. <br/>
                안녕하세요, 제 이름은 {name} 입니다. <br/>
                children 값은 {children} 입니다.<br/>
            </div>
        </div>
    );
};

/*
    더 많은 propType 정보
    https://github.com/facebook/prop-types
 */

MyComponent.propTypes = {
    name: PropTypes.string,
    children: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

MyComponent.defaultProps = {
    name: '기본이름',
    children: '기본 children'
}

export default MyComponent;
