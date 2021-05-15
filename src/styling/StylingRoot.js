import React from 'react';
import SassComponent from "./SassComponent";

const StylingRoot = () => {
    return (
        <SassComponent></SassComponent>
    );
};

export default StylingRoot;

/*
    리액트에서 컴포넌트를 스타일링할 때는 다양한 방식을 사용할 수 있다.

    이번 장에서 알아볼 스타일링 방식은 다음과 같다.
    - 일반 CSS
    - Saas
    - CSS Module: 스타일을 작성할 떄 CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록
    파일마다 고유한 이름을 자동으로 생성해 주는 옵션이다.
    - styled-components: 스타일을 자바스크립트 파일에 내장시키는 방식으로 스타일을 작성함과 동시에
    해당 스타일이 적용된 컴포넌트를 만들 수 있게 해준다.

    ## 이름 짓는 규칙
    클래스 이름이 중복되는 것을 방지하는것이 중요.
    BEM 네이밍 ex) card__title-primary

    ## CSS Selector
    CSS Selector를 사용하면 CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용할 수 있다.
    예를 들어 .App 안에 들어있는 .logo에 스타일을 적용하고 싶다면 다음과 같이 작성하면된다.
    .App .logo {
        height: 300px;
    }

    ## Sass 사용하기
    Sass(Syntactically Awesome Style Sheets) (문법적으로 매우 멋진 스타일시트)는 CSS 전처리기로
    복잡한 작업을 쉽게 할 수 있도록 해주고, 스타일 코드의 재활용성을 높여 줄 뿐만 아니라 코드의 가독성을 높여서
    유지보수를 더욱 쉽게 해준다.

    create-react-app 구버전에서는 Sass를 사용하려면 추가 작업이 필요했는데, v2 버전부터는 별도의 추가 설정 없이
    바로 사용할 수 있다.

    $ npm install node-sass --save
    $ # or
    $ yarn add node-sass

    Sass에서는 두 가지 확장자 .scss와 .sass를 지원한다. Sass가 처음 나왔을 때는 .sass 확장만 지원되었으나 나중에
    개발자들의 요청에 의해 .scss 확장자도 지원하게 되었다.

    ## .sass 문법과 .scss 문법의 차이점
    .sass
    ```code
    $font-stack: Helvetica, sans-serif
    $primary-color: #333
    body
        font: 100% $font-stack
        color: $primary-color
    ```

    .scss
    ```code
    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;
    body {
        font: 100% $font-stack;
        color: $primary-color;
    }
    ```
    주요 차이점은 .sass 확장자는 중괄호({})와 세미콜론(;)을 사용하지 않는다. 반면, .scss 확장자는
    기존 CSS를 작성하는 방식과 비교해서 문법이 크게 다르지 않다. 보통 .scss 문법이 더 자주 사용되므로
    이 책에서는 .scss 확장자를 사용하여 스타일을 작성한다.
 */
