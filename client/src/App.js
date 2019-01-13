import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import NavBar from './components/NavBar';
import HomePageContainer from './containers/HomePageContainer';
import EventsContainer from './containers/EventsContainer';
import AccountContainer from './containers/AccountContainer';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <React.Fragment>
          <NavBar />
            <Route exact path='/' component={HomePageContainer} />
            <Route exact path='/events' component={EventsContainer} />
            <Route exact path='/account' component={AccountContainer} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/signin' component={SigninPage} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
