import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import CollectionPreview from "./components/collection-preview/collection-preview";
import Header from "./components/header/header.components";
import { auth } from "./firebase/firebase.utils";
import Homepage from "./pages/homepage/homepage.components";
import shopPage from "./pages/shop/shopPage";
import SignInAndSignUp from "./pages/sign-in-out/sign-in-sign-out";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  //singout fromfirebase
  unsubscribeFromAuth = null;

  componentDidMount() {
    //sign in to firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      this.setState({ user: user })
    );
  }
  componentWillUnmount() {
    //singout fromfirebase
    this.unsubscribeFromAuth();
  }
  render() {
    // console.log("started ");

    return (
      <div className="App">
        <Header {...this.state} />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/shop" exact component={shopPage} />
          <Route path="/shop/:id" component={CollectionPreview} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
