import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  }
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li><Link to={"/profiles/velopert"}>velopert</Link></li>
        <li><Link to={"/profiles/gildong"}>gildong</Link></li>
        <li><NavLink activeStyle={activeStyle} to={"/profiles/velopert"}>velopert</NavLink></li>
        <li><NavLink activeStyle={activeStyle} to={"/profiles/gildong"}>gildong</NavLink></li>
      </ul>
      <Route path={"/profiles"} exact render={()=><div>사용자를 선택해 주세요.</div>}/>
      <Route path={"/profiles/:username"} component={Profile}/>
      <WithRouterSample who={"Profiles Component"}/>
    </div>
  );
};

export default Profiles;

/*
  # 서브 라우트
  서브 라우트는 라우트 내부에 또 라우트를 정의하는 것을 의미한다. 이 작업은 그렇게 복잡하지 않다.
  그냥 라우트로 사용되고 있는 컴포넌트의 내부에 Route 컴포넌트를 또 사용하면 된다.

  ```js
  <Route path={"/profiles"} exact render={()=><div>사용자를 선택해 주세요.</div>}/>
  ```
  위 코드에서 첫번째 Route 컴포넌트에는 component 대신 render라는 props를 넣어주었다.
  컴포넌트 자체를 전달하는 것이 아니라, 보여주고 싶은 JSX를 넣어 줄 수 있다. 지금처럼 따로 컴포넌트를
  만들기 애매한 상황에 사용해도 되고, 컴포넌트에 props를 별도로 넣어주고 싶을 때도 사용할 수 있다.

  JSX에서 props를 설정할 때 값을 생략하면 자동으로 true로 설정된다. 예를 들어 현재 Profile 컴포넌트의
  첫 번째 Route에서 exact={true} 대신 그냥 exact라고만 적었는데, 그러면 exact={true}와 같은 의미이다.
 */
