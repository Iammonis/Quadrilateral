import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../Login'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchPage } from '../SearchPage/SearchPage'
import { UserPage } from '../UserPage/UserPage'


const Router=()=>{
    return(
        <div>
            <Route path= "/"  exact render = {()=><SearchBar/>}/>
            <Route path='/login' exact  render={()=><Login/>} />
            <Route path="/user/:id"  render = {(props)=><UserPage{...props}/>}/>
            <Route path = "/search" exact render = {()=><SearchPage/>}/>
        </div>
    )
}
export {Router}