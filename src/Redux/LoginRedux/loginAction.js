import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./loginActionType";


export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload 
  };
};

export const loginSuccess = (payload) => {
    console.log(payload)
  return {
    type: LOGIN_SUCCESS,
    payload
    
  };
};

export const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload
  };
};

export const fetchLoginData = (payload) => (dispatch) => {
  dispatch(loginRequest());

  const config = {
    method: "get",
    url: "https://quadrilateral-naukri.herokuapp.com/users",
  };



  
  return axios(config)
    .then((res) => {
      return dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      return dispatch(loginFailure(err));
    });
};
