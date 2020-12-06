import React from "react"
import { Route, Switch } from "react-router-dom"
import LoginPage from "../Components/LoginPage"
import RegisterPage from "../Components/Registrantion"


export default function PrivateRouter(){
    return(
        <>
            <Route path="/" exact render={(props)=><LoginPage {...props}/>} />         
            <Route path="/registration" exact render={(props)=><RegisterPage {...props} />}/>            
        </>
    )
}