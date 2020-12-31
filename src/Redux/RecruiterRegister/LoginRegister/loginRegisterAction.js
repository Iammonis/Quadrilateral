import axios from "axios";
import { LOGIN_REGISTER_FAILURE, LOGIN_REGISTER_REQUEST, LOGIN_REGISTER_SUCCESS } from "./loginRegisterActionType";



export const loginRegisterRequest = (payload) => {
  return {
    type: LOGIN_REGISTER_REQUEST,
    payload 
  };
};

export const loginRegisterSuccess = (payload) => {
    
  return {
    type: LOGIN_REGISTER_SUCCESS,
    payload
    
  };
};

export const loginRegisterFailure = (payload) => {
  return {
    type: LOGIN_REGISTER_FAILURE,
    payload
  };
};

export const loginRegisterData = (payload) => (dispatch) => {
  dispatch(loginRegisterRequest());

  const config = {
    method: "get",
    url: "https://quadrilateral-naukri.herokuapp.com/recruiters",
  };

  return axios(config)
    .then((res) => {
      return dispatch(loginRegisterSuccess(res.data));
    })
    .catch((err) => {
      return dispatch(loginRegisterFailure(err));
    });
};
