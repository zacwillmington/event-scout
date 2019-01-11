import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import SigninContainer from './containers/SigninContainer';
import SignupContainer from './containers/SignupContainer';
import NavBar from './components/NavBar';
import Eventscontainer from './containers/EventsContainer';
import HomePageContainer from './containers/HomePageContainer'


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
            <Route exact path='events/' component={Eventscontainer} />
            <Route exact path='/signup' component={SignupContainer} />
            <Route exact path='/signin' component={SigninContainer} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
