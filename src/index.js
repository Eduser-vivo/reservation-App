import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import {reducer as formReducer } from 'redux-form';



const rootReducer = combineReducers({
    form: formReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
              <Route path="/" component={App} />
              <Route component={Error } />
            </Switch>
        </BrowserRouter>
    </Provider>
    
), document.getElementById('root'));

serviceWorker.unregister();
