import React, { useState , useEffect} from "react";
import axios from "axios";
import NavBar from './NavBar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
    const [RollNo,SetRollNo] = useState("");
    const [Email,SetEmail] = useState("");
    const [Password,SetPassword] = useState("");
    const [Batch,SetBatch] = useState("");
    const [Name,SetName] = useState("");
    const [Passtype,SetPasstype] = useState("password")
    const [butn,Setbutn] = useState("Show");
    const [branch , setBranch] = useState("")

    useEffect(() => {
        setBranch(localStorage.getItem("branch"))
    } , [])

    const handlePass=(e) => {
        e.preventDefault()
        if (Passtype === "password"){
            Setbutn("Hide");
            SetPasstype("text");
        }else{
            Setbutn("Show")
            SetPasstype("password");
        }
    }

    

    const handleSubmit = async (e) => {
        // e.preventDefault();
        const body = {
            name:Name,
            email: Email,
            branch: branch,
            regdno: RollNo,
            ryear:Batch,
            password:Password
        };

        console.log(body);

        await axios.post(
            `http://localhost:8000/api/signup`,
                body
          ).then(
              res => (
                  console.log(res.data),
                  alert("Successfully added")
                )
          )
          .catch( err => (
                console.log(err.message),
                alert("Successfully added")
            )
          )
    }

    return (
        <div>
            <NavBar/>
            <h1
                style={{
                    marginTop:"1rem",
                    marginRight:"2%"
                }}
            >ADD NEW STUDENT</h1>
            <form onSubmit={handleSubmit}>
                Enter Student Name:
                <br />
                <br />
                <input 
                    type="text"
                    name="Name"
                    id="Name"
                    placeholder="Enter Student name"
                    onChange={(e)=>{SetName(e.target.value)}}
                    value={Name}            
                /><br />
                Enter Student RollNo:
                <br />
                <br />

                <input 
                    type="text"
                    name="RollNo"
                    id="RollNo"
                    placeholder="Enter rollno"
                    onChange={(e) => {SetRollNo(e.target.value)}}
                    value={RollNo}
                /><br />
                Enter Student Email:
                <br />
                <br />

                <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email adddress"
                    onChange={(e) => {SetEmail(e.target.value)}}
                    value={Email}
                /><br />
                Enter Password:
                <br />
                <br />

                <input 
                    type="text"
                    name="passwoord"
                    id="password"
                    placeholder="Enter student Password(Mobile NO)"
                    onChange={(e) => {SetPassword(e.target.value)}}
                    value={Password}
                />
                {/* <button type="click" onClick={(e) => {handlePass(e)}} >{butn}</button> */}
                <br />
                Enter Batch:
                <br />
                <br />

                <input 
                    type = "number"
                    name="batch"
                    id="batch"
                    placeholder="Enter Releiving Year"
                    onChange={(e) => {SetBatch(e.target.value)}}
                    value={Batch}            
                /><br />
                <button 
                    style={{
                        cursor:"pointer"
                    }}
                type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default Add;