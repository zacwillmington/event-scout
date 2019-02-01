import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import { Provider as AlertProvider }  from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/manageReducers';

const options = {
    position: 'top left',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  }

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options} store={store}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </AlertProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
