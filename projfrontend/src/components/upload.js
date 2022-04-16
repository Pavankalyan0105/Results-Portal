import React, { useState } from "react"; 
import Jsonconversion from "./jsonconversion"; 
import * as XLSX from "xlsx"; 
import axios from "axios";
import NavBar from './NavBar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Upload = () => { 
    const [Sem,setSem] = useState(""); 
    const [result , setResult] = useState({})
    const readExcel = (file)=>{ 
        console.log("Uploaded"); 
        console.log(file); 
        var name = file.name; 
 
        const reader = new FileReader(); 
 
        reader.onload = (evt) => { 
            console.log("KKK") 
            const bstr = evt.target.result; 
            const wb = XLSX.read(bstr,{type: "binary"}); 
            const wsname = wb.SheetNames[0]; 
            const ws = wb.Sheets[wsname]; 
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1}); 
            console.log("jsondata"); 
            const jsondata = JSON.parse(Jsonconversion(data)) 
            console.log(jsondata.length); 
            setResult(jsondata)
        }; 
        reader.readAsBinaryString(file); 
    } 
    
    const body = result;
    const handleSubmit = async (e) => { 
        await axios.put(
            `http://localhost:8000/api/postresults`,
            {
                sem: "sem11",
                result: result
            }
        
            ).then(
                res => alert("success")
            ).catch(
                err => alert("Failed")
            )
 
    } 
 
    return( 
        <div>
            <NavBar/>

            <form onSubmit={handleSubmit} > 
                <h4
                    style={{
                        marginTop:"1rem",
                        fontSize:"1.5rem"
                    }}
                >Select Semester</h4>
                <select onChange={(e) => {setSem(e.target.value)}}
                    style={{
                        marginTop:"2rem",
                        height:"3rem"
                    }}
                > 
                    <option value = "sem11">I-I</option> 
                    <option value = "sem12">I-II</option> 
                    <option value = "sem21">II-I</option> 
                    <option value = "sem22">II-II</option> 
                    <option value = "sem31">III-I</option> 
                    <option value = "sem32">III-II</option> 
                    <option value = "sem41">IV-I</option> 
                    <option value = "sem42">IV-II</option> 
 
                </select><br />{Sem}<br /> 
                <h4
                    style={{
                        fontSize:"1.5rem"
                    }}
                >Upload result</h4>
                <br />
                <input  
                    type="file" 
                    id="file"
                    style={{
                        // backgroundColor:"blue",
                        marginTop:"-1rem",
                        color:"black",
                       padding:"1rem",
                       width:"18rem",
                       height:"5rem",
                       fontSize:"1.2rem"
                    }} 
                    // ref="fileUploader"
                     
                    onChange={(e)=>{ 
                        console.log("Up") 
                        const file=e.target.files[0]; 
                        readExcel(file); 
                    }} 
                    /> 
                    <br /> 
                <button type="submit">Upload</button> 
            </form> 
        </div> 
    ) 
} 
 
export default Upload;






// import React, { useState , useEffect } from "react";
// import Jsonconversion from "./jsonconversion";
// import * as XLSX from "xlsx";
// import axios from 'axios'

// const Upload = () => {
//     const [sem,setSem] = useState("");
//     const [result , setResult] = useState({})
//     const [userId, setUserId] = useState("")

//     const readExcel = (file)=>{
//         console.log("Uploaded");
//         console.log(file);

//         const reader = new FileReader();

//         reader.onload = (evt) => {
//             console.log("KKK")
//             const bstr = evt.target.result;
//             const wb = XLSX.read(bstr,{type: "binary"});
//             const wsname = wb.SheetNames[0];
//             const ws = wb.Sheets[wsname];
//             const data = XLSX.utils.sheet_to_csv(ws, { header: 1});
//             console.log("jsondata");
//             const jsondata = Jsonconversion(data);
//             console.log(jsondata);
//             setResult(JSON.parse(jsondata));
//             console.log(result);
//         };
//         reader.readAsBinaryString(file);
//     }

//     const token = {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//     };
//     const body = {
//         sem , result 
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post(
//             `http://localhost:8000/api/postresults`,
//             body
//           ).then(
//               res => alert("success")
//           ).catch(
//               err => alert("Failed")
//           )
//     }

//     useEffect(() => {
//         setUserId(localStorage.getItem('id'))
//     } ,[])

//     return(
//         <div>
//             <form onSubmit={handleSubmit} >
//                 Selct Semester 
//                 <select onChange={(e) => {setSem(e.target.value)}}>
//                     <option value = "sem11">I-I</option>
//                     <option value = "sem12">I-II</option>
//                     <option value = "sem21">II-I</option>
//                     <option value = "sem22">II-II</option>
//                     <option value = "sem31">III-I</option>
//                     <option value = "sem32">III-II</option>
//                     <option value = "sem41">IV-I</option>
//                     <option value = "sem42">IV-II</option>

//                 </select><br />{sem}<br />
//                 Upload Results File 
//                 <input 
//                     type="file"
//                     id="file"
//                     // ref="fileUploader"
//                     onChange={(e)=>{
//                         console.log("Up")
//                         const file=e.target.files[0];
//                         readExcel(file);
//                     }}
//                     />
//                     <br />
//                 <button type="submit">Upload</button>
//             </form>
//         </div>
//     )
// }

// export default Upload;

