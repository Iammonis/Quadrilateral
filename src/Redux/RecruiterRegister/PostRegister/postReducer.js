import { POST_REGISTER_FAILURE, POST_REGISTER_REQUEST, POST_REGISTER_SUCCESS } from "./postActionType"

const initstate = {
    status : "",
    error : null
}
const postRegisterReducer = (state= initstate,{type,payload})=>{
    switch(type){
        case POST_REGISTER_REQUEST:
            return{
                ...state,
                payload
            }
        case POST_REGISTER_SUCCESS:
            return{
                ...state,
                status : payload
            }
        case POST_REGISTER_FAILURE:
            return{
                ...state,
                error : true
            }
        default:
            return state
    }
}
export {postRegisterReducer}