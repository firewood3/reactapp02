import React from 'react';
import styles from '../CSSModule2.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CssModule3 = () => {
  return (
    // <div className={styles.wrapper}>
    // <div className={ `${styles.wrapper} ${styles.inverted} `}>
    // <div className={ [styles.wrapper, styles.inverted].join(' ')}>
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요, 저는 <span className={"something"}>CSS Module!</span>
    </div>
  );
};

export default CssModule3;

/*
    ## classnames
    classnames는 CSS 클래스를 조건부로 설정할 때 매우 유용한 라이브러리이다.
    또한 CSS Module을 사용할 때 이 라이브러리를 사용하면 여러 클래스를 적용할 때 매우 편리하다.
    npm install classnames
 */

/*
    classNames를 쓰는 것이 가독성이 높다.
    CSS Module과 함께 사용하면 CSS Module 사용이 훨씬 쉬워진다.
    classnames에 내장되어 있는 bind 함수를 사용하면 클래스를 넣어줄 때마다
    styles.[클래스 이름] 형태를 사용할 필요가 없다. 사전에 미리 styles에서 받아 온 후
    사용하게끔 설정해 두고 cx('클래스 이름', '클래스 이름2') 형태로 사용할 수 있다.
    CSS Moudle을 사용할 때 클래스를 여러 개 설정하거나, 또는 조건부로 클래스를 설정할 때
    classnames의 bind를 사용하면 훨씬 편리하게 작성할 수 있다.
 */
