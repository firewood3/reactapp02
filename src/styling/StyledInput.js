import React from 'react';
import styled from 'styled-components';
// 사용해야할 태그명이 유동적이거나 특정 컴포넌트 자체에 스타일링해 주고 싶다면
// 다음과 같이 구현 가능하다.

const StyledInput = styled('input')`
  background: gray;
`;


export default StyledInput;
