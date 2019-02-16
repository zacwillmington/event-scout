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
import UserInput from './components/UserInput';
import EventInput from './components/EventInput';
import Footer from './components/Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
          <React.Fragment>
          <NavBar />
          {/* Protected routes */}
          <Route exact path='/' component={HomePageContainer} />

          {/* user's events routes */}
            <Route exact path='/users/:id/events/new' component={EventInput} />

            <Route exact path='/users/:id/events/:event_id/edit' component={EventInput} />

            <Route exact path='/users/:id/events' component={EventsContainer} />


            {/* events routes */}
            <Route exact path='/events' component={EventsContainer} />
            <Route exact path='/events/:id' component={EventComponent} />

            

            {/* Account routes */}
            <Route exact path='/users/:id' component={AccountContainer} />

           {/* NON protected routes */}
            <Route path='/signup' component={SignupPage} />
            <Route path='/signin' component={SigninPage} />
            <Route path='/logout' component={LogoutPage} />
      
          </React.Fragment>
          <Footer />
      </div>
    );
  }
}

export default App;
