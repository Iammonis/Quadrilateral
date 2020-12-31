import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../Login'


const Router=()=>{
    return(
        <div>
            <Route path='/login' exact render={()=><Login/>} />
            
        </div>
    )
}
export {Router}