import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {registerReducer} from './Register/registerReducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = ({
    user_reg: registerReducer,


})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)