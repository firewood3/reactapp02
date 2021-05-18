import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";
import HistorySample2 from "./HistorySample2";

const RouteRoot = () => {
  return (
    <div>
      <ul>
        <li><Link to={"/"}>홈</Link></li>
        <li><Link to={"/about"}>소개</Link></li>
        <li><Link to={"/profiles"}>프로필</Link></li>
        <li><Link to={"/history"}>History 예제</Link></li>
        <li><Link to={"/history2"}>History2 예제</Link></li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path={["/about", "/info"]} component={About}/>
        {/*<Route path={["/profile/:username", "/profile"]} component={Profile} />*/}
        <Route path={["/profiles"]} component={Profiles} />
        {/*<Route path="/about" component={About}/>*/}
        {/*<Route path="/info" component={About}/>*/}
        <Route path={["/history"]} component={HistorySample} />
        <Route path={["/history2"]} component={HistorySample2} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({location})=> (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default RouteRoot;

/*
  # URL 파라미터와 쿼리: location
  파라미터 예시: /profile/velopert
  쿼리 예시: /about?details=true
   유동적인 값을 사용해야 하는 상황에서 파라미터를 써야 할지 쿼리를 써야할지 정할 때,
   무조건 따라야 하는 규칙은 없다. 다만 일반적으로 파리미터는 특정 아이디 혹은 이름을 사용하여
   조회할 때 사용하고, 쿼리는 우리가 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때 사용한다.

  # NavLink
  NavLink는 Link와 비슷하다. 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은
  CSS 클래스를 적용할 수 있는 컴포넌트이다.
  NavLink에서 링크가 활성화되었을 때의 스타일을 적용할 때는 activeStyle값을, CSS 클래스를 적용할 때는
  activeClassName 값을 props로 넣어주면 된다.

  큰 규모의 프로젝트를 진행하다 보면 한 가지 문제가 발생한다. 바로 웹 브라우저에서 사용할 컴포넌트, 상태관리를
  하는 로직, 그 외 여러 기능을 구현하는 함수들이 점점 쌓이면서 최종 결과물인 자바스크립트의 파일의 크기가
  매우 커진다는 점이다.

  예를 들어 /about 페이지에 들어왔을 때 지금 당장 필요하지 않은 Profile 컴포넌트까지 불러온다. 라우트에 따라 필요한
  컴포넌트만 불러오고, 다른 컴포넌트는 다른 페이지를 방문하는 등의 필요한 시점에 불러오면 더 효율적이다. (코드스플리팅)
 */
