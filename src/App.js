import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Homepage from "./pages/homepage/homepage.components";
import ShopPages from "./pages/shopPages";

class App extends Component {
  render() {
    // console.log("started ");

    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          {/* <Route path="/topic" exact component={} /> */}
          <Route path="/shop/:id" component={ShopPages} />
        </Switch>
      </div>
    );
  }
}

export default App;
