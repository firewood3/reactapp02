import React, {useEffect} from 'react';
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공'
  }
}

const Profile = ({ match }) => {
  const {username} = match.params;
  const profile = data[username];
  console.log('match', match)
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample who={"Profile Component"}/>
    </div>
  );
};

export default Profile;

/*
  # URL 파라미터 : match
  URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아오는 match라는 객체 안의 params 값을 참조한다.
  match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어 있다.

  사용할 path규칙에는 /profile/:username이라고 넣어주면된다.
  이렇게 설정하면 match.params.username 값을 통해 현재 username 값을 조회할 수 있다.
 */
