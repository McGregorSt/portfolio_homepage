import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Portfolio from "./components/Navigation/Portfolio/Portfolio";
import Contact from './components/Contact/Contact'
import * as styles from "./App.css";

function App() {
  // let routes = (
  //   <Switch>
  //     <Route path="/">
  //       <Redirect from="/portfolio_homepage" to="/fx_holder" />
  //     </Route>
  //   </Switch>
  // );

  return (
    <div className="App">
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
