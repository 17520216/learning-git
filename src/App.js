import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Cal from "./components/Cal";
import Sort from "./components/Sort";
import Find from "./components/Find";

function App() {
  return (
    <>
      <div className="App">Learning Js</div>
      <Router>
        <div>
          <nav className='wrap'>
            <ul className='tabs'>
              <li className='tab-content'>
                <NavLink to="/cal">Cal</NavLink>
              </li>
              <li className='tab-content'>
                <NavLink to="/sort">Sort</NavLink>
              </li>
              <li className='tab-content'>
                <NavLink to="/find">Find</NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/sort">
              <Sort />
            </Route>
            <Route path="/find">
              <Find />
            </Route>
            <Route exact path="/cal">
              <Cal />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
