
import axios from 'axios'
import { GET_REGISTER_FAILURE, GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS } from './getActionType'

export const getRegisterRequest =()=>{
    return{
        type : GET_REGISTER_REQUEST
    }
}
export const getRegisterSuccess = (payload)=>{
    return{
        type : GET_REGISTER_SUCCESS,
        payload
    }
}
export const getRegisterFailure = (payload)=>{
    return{
        type : GET_REGISTER_FAILURE,
        payload
    }
}
export const getRegisterData = (payload)=>(dispatch)=>{
    dispatch(getRegisterRequest());
  
    const config = {
      method: "get",
      url: "https://quadrilateral-naukri.herokuapp.com/recruiters",
    };
  
    return axios(config)
      .then((res) => {
         dispatch(getRegisterSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
         dispatch(getRegisterFailure(err));
      });
}