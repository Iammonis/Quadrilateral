import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {registerReducer} from './Register/registerReducer'
import { loginReducer } from "./LoginRedux/loginReducer";
import { getRegisterReducer } from "./RecruiterRegister/GetRegister/getReducer";
import { loginRegisterReducer } from "./RecruiterRegister/LoginRegister/loginregisterReducer";
import { postRegisterReducer } from "./RecruiterRegister/PostRegister/postReducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({user_reg: registerReducer,log:loginReducer,get:getRegisterReducer,post : postRegisterReducer,logReg : loginRegisterReducer})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export let store = createStore(rootReducer, applyMiddleware(thunk));

