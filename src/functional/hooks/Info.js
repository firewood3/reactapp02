import React, {useEffect, useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e => {
        setNickname(e.target.value);
    };
    // 마운트 될 때만 실행
    useEffect(() => {
        console.log('마운트 될 때만 실행됩니다.');
        // 오직 언마운트 될때만 실행
        return () => {
            console.log('unmount');
        }
    },[]);
    // 마운트 될 때 실행, 업데이트 될 때도 실행
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        // 업데이트 되기 직전 실행, 언마운트 되기 직전 실행
        return () => {
            console.log('cleanup');
        }
    });
    // 마운트 될 때 실행, name 값이 변경될 때만 실행
    // 배열 안에 useState를 통해 관리하고 있는 상태를 넣어주어도 되고, props로 전달받은 값을 넣어주어도 된다.
    useEffect(()=> {
        console.log(name);
    }, [name]);

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;

/*
    # useEffect

    ## 마운트 될때 실행, 업데이트 될 때 실행
    useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.
    클래스형 컴포넌트의 componentDidMount와 componentDidupdate를 합친 형태로 보아도 무방하다.

    ## 마운트 될 때만 실행
    useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트 될 때는 실행하지 않으려면
    함수의 두 번째 파라미터로 비어 있는 배열을 넣어주면된다.

    ## 특정 값이 업데이트 될 때 실행
    useEffect의 두번째 매개변수로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 된다.
    배열 안에 useState를 통해 관리하고 있는 상태를 넣어주어도 되고, props로 전달받은 값을 넣어주어도 된다.

    ## 뒷정리하기
    useEffect는 기본적으로 렌더링이 되고 난 직후 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
    컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해주어야 한다.

 */
