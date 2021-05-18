import React, {useEffect} from 'react';

const HistorySample2 = (props) => {
  console.log(props);
  const handleGoBack = () => {
    props.history.goBack();
  };
  const handleGoHome = () => {
    props.history.push('/');
  };

  // componentDIdMount();
  // componentWillMount();
  useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.');
    const unblock = props.history.block("정말 떠나실 건가요?");
    // 오직 언마운트 될때만 실행
    return () => {
      console.log('언마운트 될때 실행됩니다.')
      console.log('unmount');
      if (unblock) {
        unblock();
      }
    }
  },[]);

  return (
    <div>
      <p>Sample2</p>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample2;
