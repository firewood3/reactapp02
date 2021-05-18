/*
    arr.map(callback, [thisArg])

    callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지이다.
        - currentValue: 현재 처리하고 있는 요소
        - index: 현재 처리하고 잇는 요소의 index 값
        - array: 현재 처리하고 있는 원본 배열
    thisArg(선택항목): callback 함수 내부에서 사용할 this 레퍼런스


 */

const numbers = [1,2,3,4,5];
const result = numbers.map(num => num * num);
console.log(result)

const sum = numbers.reduce((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return a + b;
});


console.log(parseInt(''));
