import React, { Component } from 'react';
import './App.css';
import SongContainer from "./containers/songcontainer"

class App extends Component {
  render() {
    return (
      <div>
      <h1> Top 20 songs! </h1>
      <SongContainer/>
    </div>
    );
  }
}

export default App;
