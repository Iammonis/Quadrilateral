import {REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE} from './actionTypes'

const initState = {
    loading: false,
    error: false
}
export const registerReducer = (state = initState,{type, payload})=>{
    switch(type){
        case REGISTER_REQUEST:
            return{
                ...state,
                loading : true
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading : false
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                loading: false,
                error : true
            }
        default:
            return state
    }
}