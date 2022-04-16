import React,{useState} from "react"; 
import axios from "axios"
 
function  ShowResult(sem) { 
    console.log(JSON.parse(localStorage.getItem(sem)))
    return JSON.parse(localStorage.getItem(sem))    
} 
 
export default ShowResult;