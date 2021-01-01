import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../Login'
import { SearchPage } from '../../Components/SearchPage/SearchPage'
import { SearchBar } from '../../Components/SearchBar/SearchBar'


const Router=()=>{
    return(
        <Switch>
            <Route path='/' exact render={ ()=><SearchBar />} />
            <Route path='/login' exact render={ ()=><Login />} />
            <Route path='/search' exact render={ ()=><SearchPage />} />
        </Switch>
    )
}
export {Router}