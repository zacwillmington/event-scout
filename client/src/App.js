import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import SigninContainer from './containers/SigninContainer';
import SignupContainer from './containers/SignupContainer';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <Route path='/' component={SignupContainer} />
          <Route path='/signin' component={SigninContainer} />
          <NavBar />
          <Route />
          <Route />
          <Route />
          <Route />


        </Router>
      </div>
    );
  }
}

export default App;
