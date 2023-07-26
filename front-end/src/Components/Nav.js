import React, { useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';  
import Logo from '../images/Logo.jpg'; 
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout= ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    const refreshPage=()=> {
        logout();
        window.location.reload(false);        
    }
    return(
    <header style={{ "fontFamily": "Arial,Helvetica, sans-serif" }}>
        <nav className="navbar">
        { !auth?
            <ul>
                
                <li style={{ "display": "inline" }}><img src={Logo} className="img1" alt="Logo" /></li>
                <li className="hello1"><Link to ="/Home" className="pos" id="nav1" >Musophile</Link></li>
                <li className="hello1" ><Link to ="/Home" className="pos" id="navPrem" style={{"left":"400px"}} >Songs Available</Link></li>
                <li className="hello1"><Link to = "/Home1" className="pos" id="navPrem" >Song Search</Link></li>
                <li className="hello1"><Link to = "/Elite" className="pos" id="navSupp" >Eliteness</Link></li>
                <li className="hello1" id="oki">|</li>
                <li className="hello1"><Link to = "/SignUp" className="pos" id="navSign" >Sign up</Link></li>
                <li className="hello1"><Link to = "/Login"  className="pos" style={{"left":"1050px","display":"inline", "width": "60px","color":"#D9DADC"}}>Log in</Link></li>
            </ul> :
            <ul>   
                <li style={{ "display": "inline" }}><img src={Logo} className="img1" alt="Logo" /></li>
                <li className="hello1" ><Link to ="/Home" className="pos" id="nav1" >Musophile</Link></li>
                <li className="hello1" ><Link to ="/Home" className="pos" id="navPrem" style={{"left":"400px"}} >Songs Available</Link></li>
                <li className="hello1" ><Link to = "/Home1" className="pos" id="navPrem" >Song Search</Link></li>
                <li className="hello1"><Link to = "/Elite" className="pos" id="navSupp" >Eliteness</Link></li>
                <li className="hello1" id="oki">|</li>
                <li className="hello1" style={{"left":"570px","width":"400px"}}><Link onClick={refreshPage} to = "/SignUp" className="pos" id="navPrem" style={{"width":"280px"}}>Logout ({JSON.parse(auth).username})</Link></li>
            </ul>
        }
        </nav>
    </header>
    );
}


export default Nav;