import {BrowserRouter,Switch,Route,NavLink} from "react-router-dom";
import React,{useState , useEffect}  from "react";


const NavBar = ()  => {
    const [click, setClick] = React.useState(false);
    const [role , setRole] = useState("")

    
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    useEffect( () => {
      setRole(localStorage.getItem("role"))
    } , [])

    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
             
             
              {(role==="1")?(<li className="nav-item">
                <NavLink
                  exact
                  to="/upload"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                 upload
                </NavLink>
              </li>):""}

              {(role==="0")?(
              <li className="nav-item">
                <NavLink
                  exact
                  to="/fetch"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  My result
                </NavLink>
              </li>):""}
              
              { (role === "1")?(
              <li className="nav-item">
                <NavLink
                  exact
                  to="/add"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Add student
                </NavLink>
              </li>):""}

              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                 onClick={ () => localStorage.clear()}
                >
                  logout
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
  }

  export default NavBar;