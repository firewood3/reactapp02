const {useReducer} = require("react");

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
}

export default useInputs;

/*
    다른 Hooks
    다른 개발자가 만든 다양한 Hooks 리스트는 다음 링크에서 확인할 수 있다.
    https://nikgraf.github.io/react-hooks/
    https://github.com/rehooks/awesome-react-hooks

    리액트에서 Hooks 패턴을 사용하면 클래스형 컴포넌트를 작성하지 않고도 대부분의 기능을 구현할 수 있다.
    이러한 기능이 리액트에 릴리즈되었다고 해서 기존의 setState를 사용하는 방식이 잘못된 것은 아니다.

    리액트 매뉴얼에 따르면, 기존의 클래스형 컴포넌트는 앞으로도 계속해서 지원될 예정이다. 그렇기 때문에 만약
    유지보수 하고있는 프로젝트에서 클래스형 컴포넌트를 사용하고 있다면, 이를 굳이 함수형 컴포넌트와 Hooks를
    사용하는 형태로 전환할 필요는 없다. 다만, 메뉴얼에서는 새로 작성하는 컴포넌트의 경우 함수형 컴포넌트와
    Hooks를 사용할 것을 권장하고 있다. 앞으로 프로젝트를 개발할 때 함수형 컨포넌트의 사용을 첫 번째 옵션으로 두고,
    꼭 필요한 상황에서만 클래스형 컴포넌트를 구현하자.
 */
