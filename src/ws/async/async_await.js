/*
  #async/await
  async/await는 Promise를 더욱 쉽게 사용할 수 있도록 해 주는 ES2017(ES8)의 문법이다.
  이 문법을 사용하려면 함수의 앞 부분에 async 키워드를 추가하고, 해당 함수 내부에서
  Promise의 앞 부분에 await 키워드를 사용한다. 이렇게 하면 promise가 끝날 때 까지 기다리고,
  결과 값을 특정 변수에 담을 수 있다.
 */

function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50보다 높으면 에러 발생시키기
        const e = new Error('NumberTooBig');
        return reject('dd');
        // return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    // try / catch 구문을 사용하여 에러를 처리한다.
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

console.log('before')
runTasks();
console.log('after')
