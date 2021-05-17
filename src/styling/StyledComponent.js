import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  /* props로 넣어준 값을 직접 전달해 줄 수 있습니다.*/
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  /*
    기본적으로 가로 크기 1024px에 가운데 정렬을 하고 
    가로 크기가 작아짐에 따라 크기를 줄이고
    768px 미만이 되면 꽉 채운다.
   */
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* &문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
  /* 함수 안에서 다시 css 값을 추가하려면 css Tagged 템플릿 리터럴을 다시 한번 쓴다.*/
  ${(props) => props.inverted &&
    css`
    background: none;
    border: 2px solid white;
    color: white;
    &:hover {
      background: white;
      color:black;
    }
  `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return <Box color={"black"}>
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
  </Box>;
};

export default StyledComponent;

/*
    # Tagged 템플릿 리터럴
    # styled-components
    컴포넌트 스타일링의 또 다른 패러다임은 자바스크립트 파일 안에 스타일을 선언하는 방식이다.
    이 방식을 'CSS-in-JS'라고 부른다. 이와 관련된 라이브러리는 정말 많다.
    라이브러리의 종류는 https://github.com/MicheleBertoli/css-in-js에서 확인할 수 있다.
    개발자들이 가장 선호하는 CSS-in-JS 중 하나는 styled-components이다.

    styeld-components를 대체할 수 있는 라이브러리로는 현재 emotion이 대표적이다.
    작동방식은 styled-components와 꽤 비슷하다.

    npm install styled-components

    styled-components를 사용하면 자바스크립트 파일 하나에 스타일까지 작성할 수 있기 때문에
    .css 또는 .scss 확장자를 가진 스타일 파일을 따로 만들지 않아도 된다는 이점이 있다.

    styled-component와 일반 classNames를 사용하는 CSS/Sass를 비교했을 때, 가장 큰 장점은
    props 값으로 전댈해 주는 값을 쉽게 스타일에 적용할 수 있다는 것이다.
 */
