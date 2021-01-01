import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {registerReducer} from './Register/registerReducer'
import { loginReducer } from "./LoginRedux/loginReducer";
import { getRegisterReducer } from "./RecruiterRegister/GetRegister/getReducer";
import { loginRegisterReducer } from "./RecruiterRegister/LoginRegister/loginregisterReducer";
import { postRegisterReducer } from "./RecruiterRegister/PostRegister/postReducer";
import { reducer as filterReducer } from "./home_redux/reducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    filter1: filterReducer, 
    user_reg: registerReducer,
    log:loginReducer,
    get:getRegisterReducer,
    post : postRegisterReducer,
    logReg : loginRegisterReducer
})

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)