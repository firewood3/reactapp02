import "./App.css";
import {Route, Link} from 'react-router-dom';
import FunctionalRoot from "./functional/FunctionalRoot";
import StylingRoot from "./styling/StylingRoot";
import Home from "./routing/Home";
import About from "./routing/About";

function App() {
  // return <FunctionalRoot></FunctionalRoot>;
  // return <StylingRoot/>;
  return (
    <div>
      <ul>
        <li><Link to={"/"}>홈</Link></li>
        <li><Link to={"/about"}>소개</Link></li>
      </ul>
      <hr/>
      <Route path="/" component={Home} exact={true}/>
      <Route path={["/about", "/info"]} component={About}/>
      {/*<Route path="/about" component={About}/>*/}
      {/*<Route path="/info" component={About}/>*/}
    </div>
  )
}

export default App;


/*
  # URL 파라미터와 쿼리
  파라미터 예시: /profile/velopert
  쿼리 예시: /about?details=true


 */
