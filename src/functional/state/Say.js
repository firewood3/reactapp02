import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={()=>setColor('red')}>빨간색</button>
            <button style={{color: 'green'}} onClick={()=>setColor('green')}>초록색</button>
            <button style={{color: 'blue'}} onClick={()=>setColor('blue')}>파란색</button>
        </div>
    );
};

export default Say;

/*
다음과 같은 코드는 잘못된 코드이다.

// const [object, setObject] = useState({a:1, b:2]);
object.b = 2;

// 배열이나 객체의 업데이트 경우에는 배열이나 객체의 사본을 만들고 그 사본에 값을 업데이트 한 후, 그 사본의 상태를
setState 혹은 세터 함수를 통해 업데이트 해야한다.

//객체 다루기
const object = {a: 1, b: 2, c:3}
const nextObject = { ...object, b: 2}; // 사본을 만들어 b 값만 덮어 쓰기

// 배열 다루기
const array1 = [
    {id: 1, value: true},
    {id: 2, value: true},
    {id: 3, value: false}
];

let nextArray1 = array1.concat({id:4});
console.log(nextArray1);
let filter1 = nextArray1.filter(item => item.id !== 2);
let map1 = nextArray1.map(item => item.id === 1 ? {...item, value: false} : item);
console.log(filter1);
console.log(map1);

객체에 대한 사본을 만들 때는 spread 연산자라 불리는 ...을 사용하여 처리하고,
배열에 대한 사본을 만들 때는 배열의 내장 함수들을 활용한다.
 */

/*
    props와 state는 둘 다 컴포넌트에서 사용하거나 랜더링할 데이터를 담고있다.

    props는 부모 컴포넌트가 설정한다. 자식 컴포넌트에서는 props를 직접 변경 할 수 없다.
    변경하려면, 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면서 props를 변경하도록 하면 된다.
    state는 컴포넌트 자체적으로 지닌 값을 컴포넌트 내부에서 값을 업데이트할 수 있다.
 */
