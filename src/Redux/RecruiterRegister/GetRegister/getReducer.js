import { GET_REGISTER_FAILURE, GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS } from "./getActionType"

const initState = {
    recruiterData : [],
    isloading : false,
    error : null
}
const getRegisterReducer = (state = initState,{type,payload})=>{
    switch(type){
        case GET_REGISTER_REQUEST:
            return{
                ...state,
                isloading : true
            }
        case GET_REGISTER_SUCCESS:
            return{
                ...state,
                isloading : false,
                recruiterData : [...payload]
            }
        case GET_REGISTER_FAILURE:
            return {
                ...state,
                isloading : false,
                error : true
            }
        default :
        return state
    }
}
export {getRegisterReducer}