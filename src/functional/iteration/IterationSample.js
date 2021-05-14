import React from 'react';

const IterationSample = () => {

    const names = ['눈사람', ['얼음'], ['눈'], ['바람']];
    // 고유한 값이 없을 때만 index값을 key로 사용해야한다. index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링 하지 못한다.
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    console.log(nameList);

    return (
        <div>
            {/*<ul>*/}
            {/*    <li>눈사람</li>*/}
            {/*    <li>얼음</li>*/}
            {/*    <li>눈</li>*/}
            {/*    <li>바람</li>*/}
            {/*</ul>*/}
            <ul>
                {nameList}
            </ul>
        </div>
    );
};

export default IterationSample;

/*
컴포넌트 반복
1. JSX 코드로 된 배열을 생성한후 랜더링

Key
리엑트에서 key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다.
예를 들어 유동적인 데이터를 다룰 때는 원소를 새로 생성할 수도, 제거할 수도, 수정할 수도 있다.
key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다.
하지만 key가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아 낼 수있다.
key를 설정하지 않으면 개발자도구에 경고 메시지가 나타난다.

key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이
설정하면 된다. key 값은 언제나 유일해야한다. 따라서 데이터가 가진 고윳값을 key 값으로 설정해야한다.

const articleList = articles.map(article => (
    <Article
        title={article.title}
        writer={article.writer}
        key={article.id}
    />
);
 */
