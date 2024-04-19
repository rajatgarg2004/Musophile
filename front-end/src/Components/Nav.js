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

            <ul style={{width:"20%"}}>
                <img src={Logo} className="img1" alt="Logo" />
                <li><Link to ="/Home">Musophile</Link></li>
            </ul>
            { !auth?
                <ul style={{width:"80%",justifyContent:'end'}}>
                    <li ><Link to ="/Home">Songs Available</Link></li>
                    <li ><Link to = "/Search">Song Search</Link></li>
                    <li><Link to = "/Elite">Eliteness</Link></li>
                    <li >|</li>
                    <li className="hello1"><Link to = "/SignUp" >Sign up</Link></li>
                    <li className="hello1"><Link to = "/Login" >Log in</Link></li>
                </ul> :
                <ul style={{width:"80%",justifyContent:'end'}}>   
                    <li ><Link to ="/Home">Songs Available</Link></li>
                    <li ><Link to = "/Search">Song Search</Link></li>
                    <li><Link to = "/Elite">Eliteness</Link></li>
                    <li >|</li>
                    <li><Link onClick={refreshPage} to = "/SignUp">Logout ({JSON.parse(auth).username})</Link></li>
                </ul>
            }
        </nav>
    </header>
    );
}


export default Nav;