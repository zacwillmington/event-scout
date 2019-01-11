import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SigninContainer from './containers/SigninContainer';
import SignupContainer from './containers/SignupContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SigninContainer />
        <SignupContainer />
      </div>
    );
  }
}

export default App;
