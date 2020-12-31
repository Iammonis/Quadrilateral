import { LOGIN_REGISTER_FAILURE, LOGIN_REGISTER_REQUEST, LOGIN_REGISTER_SUCCESS } from "./loginRegisterActionType";

  
 const initState = {
    loginData:[],
    loading: false,
    isAuth : false,
    error : false
  };
  
  export const loginRegisterReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case LOGIN_REGISTER_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
  
      case LOGIN_REGISTER_SUCCESS: {
        return {
          ...state,
          loading: false,
          isAuth : true,
          loginData: [...payload],
          error : false
        };
      }
  
      case LOGIN_REGISTER_FAILURE: {
        return {
          ...state,
          loading: false,
          error : true
        };
      }
  
      default:
        return state;
    }
  };
  