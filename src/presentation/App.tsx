import React from "react";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SearchResult from "./screens/SearchResult";
import Header from "./component/Header";

function App(props: any) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search/:id">
          <SearchResult {...props} />
        </Route>
        <Route path="/headlines" exact={true}>
          <HomeScreen {...props} />
        </Route>
        <Route exact path="/">
          <Redirect to="/headlines" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
