import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import CollectionPreview from "./components/collection-preview/collection-preview";
import Homepage from "./pages/homepage/homepage.components";
import shopPage from "./pages/shop/shopPage";

class App extends Component {
  render() {
    // console.log("started ");

    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/shop" exact component={shopPage} />
          <Route path="/shop/:id" component={CollectionPreview} />
        </Switch>
      </div>
    );
  }
}

export default App;
