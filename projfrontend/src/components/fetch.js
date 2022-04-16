import React, { useState } from "react"; 
import ShowResult from "./showResult"; 
import NavBar from './NavBar' 
import "../table.css"

const Fetch = () => { 
    const [s,sets] = useState(false); 
    const [data,Setdata] = useState("No Student Selected"); 
    const [RollNo,SetRollNo] = useState(""); 
    const [Sem,setSem] = useState(""); 
    const [user,setUser] = useState({ 
        subcode:[], 
        subname:[], 
        credits:[], 
        Grade:[] 
    }); 

    const [res , setRes] = useState([])

    const handleClick = () => { 

        
        const value = []; 
        // console.log("HANDLE CLICK"); 
        value.push(ShowResult(Sem))
        setRes(ShowResult(Sem)) 
        // console.log(value[0][1].Subcode) 
        // console.log(value[0].length) 
        for(var i=0;i<value[0].length;i++){ 
            user.subcode.push(value[0][i].Subcode); 
            user.subname.push(value[0][i].Subname); 
            user.credits.push(value[0][i].Credits); 
            user.Grade.push(value[0][i].Grade); 
        } 
        // console.log(user); 
        // console.log("LLL") 
        // console.log(user.subcode); 
        sets(true); 
    } 
    const render=() => { 
        console.log("RENDER") 
        let usersdata=[]; 
        for(var i=0;i<user.subcode.length;i++){ 
            usersdata.push(<div>{user.subcode[i]},{user.subname[i]},{user.credits[i]},{user.Grade[i]}</div>); 
        } 
        console.log(typeof(usersdata[0])); 
        // return <div>{usersdata[0].props.children}</div>; 
        return ( 
            <table
                style={{
                    // borderCollapse:"collapse",
                    // align:"center",
                    marginLeft:"23rem",
                    backgroundColor:"white",
                    height:"20rem",
                    width:"50%",
                    border:"1px solid black"

                }}
               
            > 
            {/* { 
                usersdata.map((item) => { 
                    return(<tr> 
                        <td>{item.props.children[0]}</td> 
                        <td>{item.props.children[2]}</td> 
                        <td>{item.props.children[4]}</td> 
                        <td>{item.props.children[6]}</td> 
                    </tr> 
                    ); 
                }) 
            }  */}

            <tr>
                    <th>SUBCODE</th> 
                    <th>SUBNAME</th> 
                    <th>CREDITS</th> 
                    <th>GRADE</th> 
            </tr>
            {
            
            res.map(
                (item) => {
                    return (
                        <tr>                       
                            <td>{item.Subcode}</td>                            
                            <td>{item.Subname}</td>                            
                            <td>{item.Credits}</td>                            
                            <td>{item.Grade}</td>                            
                        </tr>
                    )
                }
            )
            }

        </table>  
        ) 
    } 
    return( 
        <div> 
            <NavBar/>
            
           
            
            <h2
                style={{
                    marginLeft:"40%",
                    marginTop:"1rem"
                }}
            > RegdNo: {JSON.parse(localStorage.getItem("sem11"))[0].Htno}</h2>

                <h3
                    style={{
                        marginLeft:"42.3%",
                        marginTop:"1rem"
                    }}
                >selct semester </h3> <br />
                <select onChange={(e) => {setSem(e.target.value)}}
                    style={{
                        width:"13rem",
                        marginLeft:"40.3%",
                        height:"3rem",
                    }}
                > 
                    <option value = "">select</option> 
                    <option value = "sem11">I-I</option> 
                    <option value = "sem12">I-II</option> 
                    <option value = "sem21">II-I</option> 
                    <option value = "sem22">II-II</option> 
                    <option value = "sem31">III-I</option> 
                    <option value = "sem32">III-II</option> 
                    <option value = "sem41">IV-I</option> 
                    <option value = "sem42">IV-II</option> 
 
                </select><br />
                <button type="click" 
                    style={{
                        width:"10rem",
                        marginLeft:"42%",
                        color:"#000000",
                        backgroundColor:"#00FA9A"
                    }}

                onClick={
                    () => (
                    setUser({
                        subcode:[], 
                        subname:[],
                        credits:[],
                        Grade:[]
                    }),            
                    handleClick()
                )}>Search</button> 
            <br /> 
            <br /> 
 
                { 
                    (s==true)?render():"" 
                } 
            <br /> 
 
        </div> 
    ) 
} 
 
export default Fetch;