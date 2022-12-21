import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { appReducers } from './reducer/index';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore( 
    appReducers, 
    composeEnhancers(applyMiddleware(thunk)) 
)

