const object = {a:1, b:2, C: 3};
const nextObject = {...object, b:1};
console.log(nextObject)

const array = [
  {id:1, value: true},
  {id:2, value: true},
  {id:3, value: false},
];

// 추가
let nextArray = array.concat({id:4});
console.log(nextArray);
// 제거
nextArray = nextArray.filter(value => value.id !==2);
console.log(nextArray);
// 수정
nextArray = nextArray.map(value => value.id === 1 ? {...value, value: false} : value);
console.log(nextArray)
