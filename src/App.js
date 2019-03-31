import React, { Component } from "react";
import Postform from "./components/Postform";
import Posts from "./components/Posts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
