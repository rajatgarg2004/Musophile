import React, { useState ,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom'
import Logo from '../images/Logo.jpg';
const Login = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/Elite');
        }
    })
    let [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const collect = async () => {
        email = email.toLowerCase();
        let result = await fetch(process.env.REACT_APP_backend_url + '/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await result.json();
        if(data.email)
        {
            localStorage.setItem("user",JSON.stringify(data));
            navigate('/Elite');
        }
        else{
            alert("Please enter correct details");
        }
    }
    
    return (
            <div className="Logger">
                <div className="Boxer1">
                    <div className="logo-container">
                        <img src={Logo} alt="Logo" width='20%' height='10%' className="logoComponent" ></img>
                    </div>
                    <h1 style={{color:'white',fontSize:'48px',textAlign:'center'}}>Log in to Musophile</h1>
                    <hr style={{ "height": "1px", "marginTop": "5%", "width": "50%",  "backgroundColor": "grey", "border": "none" }} />
                    <h4 style={{ "fontSize": "14px", "marginTop": "40px", "color": "white" }}>Email or username</h4>
                    <input type="text" className="register1" placeholder='Email or Username' onChange={(e) =>setEmail(e.target.value) } value={email} />
                    <h4 style={{ "fontSize": "14px", "marginTop": "30px", "color": "white" }}>Password</h4>
                    <input type="password" className="register1" placeholder='Password' onChange={(e) =>setPassword(e.target.value)} value={password} />
                    <button className="Boxer4" onClick={collect}>Log In</button>
                    <hr style={{ "height": "1px", "marginTop": "80px", "width": "50%", "backgroundColor": "grey", "border": "none" }} />
                    <span style={{ "fontSize": "14px", "fontWeight": "heavy", "top": "30px", "color": "grey"}}>Don't have an account? <Link to="/SignUp" style={{ "fontWeight": "bold", "color": "white", "left": "0px", }}>Sign Up for Musophile</Link></span>
                </div>
            </div>
    );
}
export default Login;