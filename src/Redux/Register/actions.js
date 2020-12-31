import {REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE} from './actionTypes'
import axios from 'axios';

export const registerRequest = () =>{
    return{
        type: REGISTER_REQUEST
    }
}

export const registerSuccess = () =>{
    return{
        type: REGISTER_SUCCESS
    }
}

export const registerFailure = () =>{
    return{
        type: REGISTER_FAILURE
    }
}

export const registerUser = payload => dispatch =>{
    dispatch(registerRequest())

    const config = {
        url: "https://quadrilateral-naukri.herokuapp.com/users",
        method: "POST",
        data : payload
    }

    axios(config)
        .then(res=>{
            dispatch(registerSuccess(res.data))
        })
        .catch(err=>{
            dispatch(registerFailure(err))
        })
}