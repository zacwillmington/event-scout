import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import NavBar from './components/NavBar';
import LogoutPage from './components/LogoutPage';
import HomePageContainer from './containers/HomePageContainer';
import EventsContainer from './containers/EventsContainer';
import AccountContainer from './containers/AccountContainer';
import EventComponent from './components/EventComponent';
import EventInput from './components/EventInput';
import styled from 'styled-components';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import TransitionGroup from "react-transition-group/TransitionGroup";

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`;

// const { location: { pathname } } = this.props;

class App extends Component {


  render() {
    return (
      <div className="App">
          <React.Fragment>
          <NavBar />             
              <Route exact path='/' component={HomePageContainer} />
                <Route exact path='/users/:id/events/new' component={EventInput} />
                <Route exact path='/users/:id/events/:event_id/edit' component={EventInput} />
                <Route exact path='/users/:id/events' component={EventsContainer} />
                <Route exact path='/events' component={EventsContainer} />
                <Route exact path='/events/:id' component={EventComponent} />
                <Route exact path='/users/:id' component={AccountContainer} />
                <Route path='/signup' component={SignupPage} />
                <Route path='/signin' component={SigninPage} />
                <Route path='/logout' component={LogoutPage} />
          </React.Fragment>
      </div>
    );
  }
}

export default App;
