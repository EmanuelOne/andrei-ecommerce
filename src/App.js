import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.components";

class App extends Component {
  render() {
    // console.log("started ");

    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
