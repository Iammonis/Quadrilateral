import { applyMiddleware, combineReducers, createStore } from "redux";
import { loginReducer } from "./LoginRedux/loginReducer";
import { getRegisterReducer } from "./RecruiterRegister/GetRegister/getReducer";
import { loginRegisterReducer } from "./RecruiterRegister/LoginRegister/loginregisterReducer";
import { postRegisterReducer } from "./RecruiterRegister/PostRegister/postReducer";
// import {thunk} from 'thunk'



const rootReducer = combineReducers({log:loginReducer,get:getRegisterReducer,post : postRegisterReducer,logReg : loginRegisterReducer})
let thunk = ({ getState, dispatch }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };

//let combineReducer = combineReducers({reducer, authReducer});

export let store = createStore(rootReducer, applyMiddleware(thunk));
