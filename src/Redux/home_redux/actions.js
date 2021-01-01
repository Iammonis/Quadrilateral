import { GET_POSTS_REQ, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from './actionTypes.js'
import axios from 'axios'

const getPostsReq = () => ({
    type: GET_POSTS_REQ
})

const getPostsSuccess = payload => ({
    type: GET_POSTS_SUCCESS,
    payload
})

const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE
})

export const getAllPosts = url => dispatch => {
    dispatch( getPostsReq() )
    return axios.get(`https://quadrilateral-naukri.herokuapp.com/posts${url}`)
    .then( res => {
        console.log(res.data)
        return dispatch( getPostsSuccess(res.data) )
    } )
    .catch( err => dispatch( getPostsFailure(err) ) )
}