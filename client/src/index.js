import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { Provider as AlertProvider }  from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/manageUsersAndEvents';


const options = {
    timeout: 5000,
    position: "bottom center"
  };

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    
    <AlertProvider template={AlertTemplate}>
            <Provider store={store}>
                <App />
            </Provider>
        </AlertProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
