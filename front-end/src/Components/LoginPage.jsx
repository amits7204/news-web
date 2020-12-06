import React,{useState} from "react"
import { Link } from "react-router-dom"


export default function LoginPage(){
    const [uName,setUname] = useState("")
    const [password,setPassword] = useState("")
    // console.log(password)

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("handleSubmit called")
    }

    return(
        <div style={{marginTop:"100px"}}>
            <h1>This is a Login Page</h1>
            <form onSubmit={(e)=>handleSubmit(e)} action="">
                <label>User Id :- </label>
                <input type="text" name="uName" value={uName} onChange={(e)=>setUname(e.target.value)}/> <br/><br/>
                <label>Password :- </label>
                <input type="text" name="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br/><br/>
                <input type="submit" value="Login"/> <br/>
                <Link to="/registration">Register Now</Link >
            </form>
        </div>
    )
}