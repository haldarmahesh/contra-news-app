import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsDetailScreen from "./screens/NewsDetail";

function App(props: any) {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <NewsDetailScreen {...props} />
        </Route>
        <Route path="/">
          <HomeScreen {...props} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
