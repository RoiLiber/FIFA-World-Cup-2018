import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from './reducers/index';

// component
import App from './components/App/App';

// styles
import './index.css';

const store = createStore(allReducers);

ReactDOM.render( 
    <Provider store={store}> 
        <App /> 
    </Provider>
    , document.getElementById('root') );
registerServiceWorker();
