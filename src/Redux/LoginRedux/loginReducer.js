import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./loginActionType";

  
 const initState = {
    data:[],
    loading: false,
    isAuth: false
  };
  
  export const loginReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case LOGIN_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
  
      case LOGIN_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: [...payload],
          isAuth: true
        };
      }
  
      case LOGIN_FAILURE: {
        return {
          ...state,
          loading: false,
          
        };
      }
  
      default:
        return state;
    }
  };
  