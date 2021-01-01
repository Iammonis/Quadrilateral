
import axios from 'axios'
import { POST_REGISTER_FAILURE, POST_REGISTER_REQUEST, POST_REGISTER_SUCCESS } from './postActionType'

export const postRegisterRequest = ()=>{
    return{
      type : POST_REGISTER_REQUEST  
    }
    
}
export const postRegisterSuccess = (payload)=>{
    return{
        type : POST_REGISTER_SUCCESS,
        payload
    }
}
export const postRegisterFailure = (payload)=>{
    return{
        type : POST_REGISTER_FAILURE,
        payload
    }
}
export const postRegisterData = (payload) => (dispatch) => {
    dispatch(postRegisterRequest());
  
    const config = {
      method: "post",
      url: "https://quadrilateral-naukri.herokuapp.com/recruiters",
  
      data: payload
    };
  
    return axios(config)
      .then((res) => {
         dispatch(postRegisterSuccess(res.data.Status));
      })
      .catch((err) => {
         dispatch(postRegisterFailure(err));
      });
  };