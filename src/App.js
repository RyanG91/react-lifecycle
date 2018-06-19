import React, { Component } from 'react';
import './App.css';
import RepoList from './RepoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoList user="ryang91"/>
      </div>
    );
  }
}

export default App;
