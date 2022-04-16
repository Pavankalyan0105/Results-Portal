import React, { useState } from "react";
import "./App.css";

import Login from "./components/Login";



function App () {
    return(
      <div>
        {/* <h1>Test</h1> */}
        {/* <Add /> */}
        {/* <Upload /> */}
        {/* <Fetch /> */}
        <Login/>
        
        
      </div>
    );
}

export default App;

















// class ExcelToJson extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       file: "",
//     };
//   }

//   handleClick(e) {
//     this.refs.fileUploader.click();
//   }

//   filePathset(e) {
//     e.stopPropagation();
//     e.preventDefault();
//     var file = e.target.files[0];
//     // console.log("START")
//     // console.log(file);
//      console.log("END");
//     this.setState({ file });

//     console.log(this.state.file);
//   }

//   readFile() {
//     var f = this.state.file;
//     var name = f.name;
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       // evt = on_file_select event
//       /* Parse data */
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: "binary" });
//       /* Get first worksheet */
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       /* Convert array of arrays */
//       const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
//       /* Update state */
//       // console.log("Data>>>" + data);// shows that excel data is read
//       console.log("JSON DATA");
//       console.log(this.convertToJson(data)); // shows data in json format
//     };
//     reader.readAsBinaryString(f);
//   }

//   convertToJson(csv) {
//     var lines = csv.split("\n");

//     var result = [];

//     var headers = lines[2].split(",");

//     for (var i = 3; i < lines.length; i++) {
//       var obj = {};
//       var currentline = lines[i].split(",");

//       for (var j = 0; j < headers.length; j++) {
//         if(currentline[j]==headers[j]){
//           continue;
//         }
//         obj[headers[j]] = currentline[j];
//       }

//       result.push(obj);
//     }

//     //return result; //JavaScript object
//     // console.log(JSON.stringify(result));
//     return JSON.stringify(result); //JSON
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="file"
//           id="file"
//           ref="fileUploader"
//           onChange={this.filePathset.bind(this)}
//         />
//         <button
//           onClick={() => {
//             this.readFile();
//           }}
//         >
//           Read File
//         </button>
//       </div>
//     );
//   }
// }

// export default ExcelToJson;
