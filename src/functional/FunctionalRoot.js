import React, {useState} from 'react';
import EventPractice from "./event/EventPractice";
import ValidationSample from "./ref/ValidationSample";
import MyComponent from "./component/MyComponent";
import Say from "./state/Say";
import IterationSample from "./iteration/IterationSample";
import IterationSample2 from "./iteration/IterationSample2";
import EventPractice2 from "./event/EventPractice2";
import Counter from "./hooks/Counter";
import Info from "./hooks/Info";
import Counter2 from "./hooks/Counter2";

const FunctionalRoot = () => {
    // const name = "리액트";
    // return (
    //     <MyComponent name={"새 컴포넌트"} favoriteNumber={3}>리액트</MyComponent>
    // );
    // return (
    //     <Say></Say>
    // )
    // return (
    //     <EventPractice></EventPractice>
    // )
    // return (
    //     <EventPractice2></EventPractice2>
    // )
    // return (
    //     <ValidationSample></ValidationSample>
    // )
    // return (
    //     <IterationSample></IterationSample>
    // )
    // return (
    //     <IterationSample2></IterationSample2>
    // )
    // return (
    //     <Counter></Counter>
    // )

    // const [visible, setVisible] = useState(false);
    // return (
    //     <div>
    //         <button
    //             onClick={() => {
    //                 setVisible(!visible);
    //             }}
    //             >
    //             {visible ? '숨기기':'보이기'}
    //         </button>
    //         <hr/>
    //         {visible && <Info/>}
    //     </div>
    // )

    return <Counter2/>
};

export default FunctionalRoot;
