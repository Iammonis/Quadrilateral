import { applyMiddleware, combineReducers, createStore } from "redux";
import { loginReducer } from "./LoginRedux/loginReducer";
// import {thunk} from 'thunk'



const rootReducer = combineReducers({log:loginReducer})
let thunk = ({ getState, dispatch }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };

//let combineReducer = combineReducers({reducer, authReducer});

export let store = createStore(rootReducer, applyMiddleware(thunk));
