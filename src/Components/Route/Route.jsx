import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../Login'
import { UserPage } from '../UserPage/UserPage'


const Router=()=>{
    return(
        <div>
         
            <Route path='/'  render={()=><Login/>} />
            <Route path="/user/:id" exact render = {(props)=><UserPage{...props}/>}/>
        </div>
    )
}
export {Router}