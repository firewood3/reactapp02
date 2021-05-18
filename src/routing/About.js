import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 상략합니다.
  });
  console.log(location)
  console.log(location.search)
  console.log(query)
  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열입니다.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;

/*
  # Link 컴포넌트를 사용하여 다른 주소로 이동하기
  Link 컴포넌트는 클릭하면 다른 주소로 이동시켜 주는 컴포넌트입니다. 일반 웹 애플리케이션에서는
  a 태그를 사용하여 페이지를 전환한다. 리액트 라우터를 사용할 때는 이 태그를 직접 사용하면 안된다.
  이 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 떄문에 애플리케이션이 들고 있던 상태들을
  모두 날려 버리게 된다. 렌더링된 컴포넌트들도 모두 사라지고 다시 처음부터 렌더링 하게 된다.

  Link 컴포넌트를 사용하여 페이지를 전환하면, 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한
  상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경해 준다. Link 컴포넌트 자체는 a 태그로
  이루어져있지만, 페이지 전환을 방지하는 기능이 내장되어 있다.

  # qs 라이브러리
  쿼리 문자열을 객체로 변환할 때는 qs라는 라이브러리를 사용한다.
  npm install qs

  # URL 쿼리와 location 객체
  쿼리는 location 객체에 들어있는 search값에서 조회할 수 있다. location 객체에 들어 있는 search 값에서
  조회할 수 있다. location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 웹 애플리케이션의 현재 주소에
  대한 정보를 지니고 있다.
  location의 형태는 다음과 같다.
  {
    "pathname": "/about",
    "search": "?detail=true",
    "hash": ""
  }
  위 location 객체는 http://localhost:3000/about?detail=true 주소로 들어갔을때의 값이다.
  URL 쿼리를 읽을 때는 위 캑체가 지닌 값 중에서 search 값을 확인해야 한다. 이 값은 문자열 형태로 되어있다.
  URL 쿼리는 ?detail=true&another=1과 같이 문자열에 여러가지 값을 설정해 줄 수 있다. search값에서 특정 값을
  읽어오기 위해서는 이 문자열을 객체 형태로 변환해 주어야 한다.

  쿼리 문자열을 객체로 변환할 때는 qs라는 라이브러리를 사용한다.
  npm install qs
  그러면 이제 About 컴포넌트에서 location.search 값에 있는 detail이 true인지 아닌지에 따라 추가 정보를
  보여 주도록 만들어 볼 수 있다.
  쿼리를 사용할 때는 쿼리 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이라는 점에 주의해야 한다.
  ?value=1 혹은 ?value=true와 같이 숫자나 논리 자료형(boolean)을 사용한다고 해서 해당 값이 우리가 원하는
  형태로 변환되는 것이 아니라, "1", "true"와 같이 문자열 형태로 받아진다.
  그렇기 때문에 숫자를 받아 와야 하면 parseInt 함수를 통해 꼭 숫자로 변환해주고, 지금처럼 논리 자료형 값을 사용해야
  하는 경우에는 정확히 "true" 문자열이랑 일치하는지 비교해주어야 한다.
 */
