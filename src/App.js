import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cal from "./components/Cal";
import Sort from "./components/Sort";
import Find from "./components/Find";

function App() {
  return (
    <>
      <div className="App">Learning Js</div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/cal">Cal</Link>
              </li>
              <li>
                <Link to="/sort">Sort</Link>
              </li>
              <li>
                <Link to="/find">Find</Link>
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
