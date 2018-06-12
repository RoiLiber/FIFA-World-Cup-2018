import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createLogger from 'redux-logger';
import allReducers from './reducers/index';

// component
import App from './components/App/App';

// styles
import './index.css';

// const logger = createLogger();
const initialState = {};
const store = createStore(allReducers, initialState, applyMiddleware(createLogger));

ReactDOM.render( 
    <Provider store={store}> 
        <App /> 
    </Provider>
    , document.getElementById('root') );
registerServiceWorker();
