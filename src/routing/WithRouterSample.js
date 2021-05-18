import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history, who}) => {
  return (
    <div>
      <h3>{who}</h3>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);

/*
  # withRouter
  withRouter 함수는 HoC(Higher-order Component)입니다. 라우트로 사용된 컴포넌트가 아니어도
  match, location, history 객체를 접근할 수 있게 해 준다.

  withRouter를 사용할 때는 컴포넌트를 내보내 줄 때 함수로 감싸준다. JSON.stringify의 두 번째
  파라미터와 세 번째 파라미터를 null과 2로 설정해 주면 JSON에 들여쓰기가 적용된 상태로 문자열이 만들어진다.

  WithRouterSample 컴포넌트를 Profiles에 사용하면 match 객체에는 params가 비어있다. withRouter를 사용하면
  현재 자신을 보여주고 있는 라우트 컴포넌트(현재 Profiles)를 기준으로 match가 전달된다. Profiles를 위한 라우트를
  설정할 때는 path="/profiles"라고만 입력했으므로 username 파라미터를 읽어 오지 못하는 상태이다.

  WithRouterSample 컴포넌트를 Profiles에서 지우고 Profile 컴포넌트에 넣으면 match 쪽에 URL 파라미터가 제대로 보인다.
 */
