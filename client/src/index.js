import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import { Provider as AlertProvider }  from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const options = {
    position: 'top left',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  }


//Create loading bar component for redux persist loading time.
// change logger to dev only //https://github.com/LogRocket/redux-logger

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options} store={store}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <App />
                    </Router>
                </PersistGate>
            </Provider>
        </AlertProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
