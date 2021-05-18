function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50보다 높으면 에러 발생시키기
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

// Promise는 콜백지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 기능이다.
increase(0)
  .then(number => {
  //  Promise에서 resolve된 값은 .then을 통해 받아 올 수 있다.
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .catch(e => {
    // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
    console.log('ddd');
    console.log(e)
  });

