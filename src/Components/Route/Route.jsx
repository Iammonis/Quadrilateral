import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../Login'
import { FinalHome } from '../HomePage/FinalHome'
import { SearchPage } from '../SearchPage/SearchPage'
import { Dashboard } from '../Dashboard/Dashboard'
import { UserDetailsPage } from '../../Pages/UserDetailsPage'
import { Login as EmployeeLogin } from '../Recruiter/Register/Login'
import { Register as EmployeeRegister } from '../Recruiter/Register/Register'

const Router=()=>{
    return(
        <Switch>
            <Route path= "/"  exact render = {()=><FinalHome />}/>
            <Route path='/login' exact  render={()=><Login />} />
            <Route path='/employee-login' exact  render={()=> <EmployeeLogin /> } />
            <Route path='/employee-register' exact  render={()=> <EmployeeRegister /> } />
            <Route path='/register' exact  render={()=><UserDetailsPage />} />
            <Route path="/dashboard/:id"  render = {(props) => <Dashboard {...props}/>}/>
            <Route path = "/search" exact render = {()=><SearchPage />}/>
        </Switch>
    )
}
export {Router}