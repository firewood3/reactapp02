import React from 'react';
import styles from '../CSSModule.module.css'
import classNames from "classnames";

classNames('one', 'two'); // = 'one two'
classNames('one', { two: true}); // = 'one two'
classNames('one', { two: false}); // = 'one'
classNames('one', ['two', 'three']); // = 'one two three'

const myClass = 'hello';
classNames('one', myClass, {myCondition: true});
// = 'one hello myCondition'

const CssModule = () => {
    console.log(styles)
    return (
        // <div className={styles.wrapper}>
        // <div className={ `${styles.wrapper} ${styles.inverted} `}>
        <div className={ [styles.wrapper, styles.inverted].join(' ')}>
            안녕하세요, 저는 <span className={"something"}>CSS Module!</span>
        </div>
    );
};

export default CssModule;

/*
    ## classnames
    classnames는 CSS 클래스를 조건부로 설정할 때 매우 유용한 라이브러리이다.
    또한 CSS Module을 사용할 때 이 라이브러리를 사용하면 여러 클래스를 적용할 때 매우 편리하다.
    npm install classnames
 */
