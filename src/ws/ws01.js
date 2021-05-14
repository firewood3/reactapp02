// 배열의 비 구조화 할당
const array = [1,2];
const [one, two] = array;
console.log(one);
console.log(two);

const object = {a: 1, b: 2, c:3}
const nextObject = { ...object, b: 3};

console.log(nextObject);

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
