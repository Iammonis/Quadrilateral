import { GET_POSTS_REQ, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './actionTypes.js'

const initState = {
    allPosts: [],
    loading: false,
    error: null
}

export const reducer = (state = initState, {type, payload}) => {
    switch(type){
        case GET_POSTS_REQ: {
            return {
                ...state,
                loading: true
            }
        }
        
        case GET_POSTS_SUCCESS: {
            console.log(payload)
            return {
                ...state,
                loading: false,
                allPosts: [...payload]
            }
        }

        case GET_POSTS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: false
            }
        }
        default: return state
    }
}