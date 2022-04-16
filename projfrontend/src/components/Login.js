import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Navigate} from 'react-router-dom'

function Login(){

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [auth , setAuth] = useState(false)
  const [err , setErr] = useState("")
  const [user , setUser] = useState({})
  

  const handleSubmit = async (e) => {
      e.preventDefault();

      await axios.post(
        "http://localhost:8000/api/signin",
        { email, password }
      ).
      then(
        res =>( 
          console.log(res.data.user),
          localStorage.setItem("token" , res.data.token),
          localStorage.setItem("id" , res.data.user._id),
          localStorage.setItem("branch" , res.data.user.branch),
          setAuth(true),
          localStorage.setItem("sem11" , JSON.stringify(res.data.user.sem11) ),
          localStorage.setItem("sem12" , JSON.stringify(res.data.user.sem12) ),
          localStorage.setItem("sem21" , JSON.stringify(res.data.user.sem21) ),
          localStorage.setItem("sem22" , JSON.stringify(res.data.user.sem22) ),
          localStorage.setItem("sem31" , JSON.stringify(res.data.user.sem31) ),
          localStorage.setItem("sem32" , JSON.stringify(res.data.user.sem32) ),
          localStorage.setItem("sem41" , JSON.stringify(res.data.user.sem41) ),
          localStorage.setItem("sem42" , JSON.stringify(res.data.user.sem42) ),
          localStorage.setItem("role" , res.data.user.role )
      )
      ).catch(err => console.log(err.error))
  }
  if(localStorage.getItem("role") === "0")
    return <Navigate to="/fetch"/>

  if(localStorage.getItem("role") === "1")
      return <Navigate to="/upload"/>

  return (
    <div className="app">

        <h1>RESULTS PORTAL</h1>
      
      <div className="login-form">


        <div className="title"
          style={{
            marginLeft:"6rem"
          }}
        >Sign In</div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email </label>
              <input value={email} onChange={ (e) => setEmail(e.target.value)} type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input value={password} onChange={ (e) => setPassword(e.target.value)} type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
            {/* {email} */}
            {/* {password} */}
          </form>
          {err}
    </div>
      </div>
    </div>
  );
}


export default  Login;