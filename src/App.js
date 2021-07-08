import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cal from "./components/Cal";
import Sort from "./components/Sort";
import Find from "./components/Find";

function App() {
  return (
    <>
      <Router>
        <Header />
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
      </Router>
    </>
  );
}

export default App;
