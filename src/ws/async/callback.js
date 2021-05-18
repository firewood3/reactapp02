function printMe() {
  console.log('Hello World');
}
setTimeout(printMe, 3000);
console.log('대기 중...');

function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000)
}

increase(0, result => {
  console.log(result)
});

// callback hell
increase(0, result => {
  console.log(result);
  increase(result, result => {
    console.log(result);
    increase(result, result => {
      console.log(result);
      increase(result, result => {
        console.log(result);
        console.log('작업 완료')
      });
    });
  });
})
