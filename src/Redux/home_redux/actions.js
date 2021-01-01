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
// https://quadrilateral-naukri.herokuapp.com/posts?q=

export const getAllPosts = url => dispatch => {
    dispatch( getPostsReq() )
    console.log(url)
    return axios.get(`https://quadrilateral-naukri.herokuapp.com/posts${url}`)
    .then( res => dispatch( getPostsSuccess(res.data) ) )
    .catch( err => dispatch( getPostsFailure(err) ) )
}