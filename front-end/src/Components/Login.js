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
        console.log(email, password);
        email = email.toLowerCase();
        let result = await fetch('http://localhost:3050/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await result.json();
        console.log(data);
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
        <div>
            <div className="Logger">
                <div className="Boxer1">
                    <img src={Logo} alt="Logo" className="logo12" style={{ "marginLeft": "110px" }}></img>
                    <h1 className="Boxer2">Log in to Musophile</h1>
                    <hr style={{ "height": "1px", "marginTop": "150px", "width": "534px", "marginLeft": "90px", "backgroundColor": "grey", "border": "none" }} />
                    <h4 style={{ "fontSize": "14px", "marginTop": "40px", "color": "white", "marginLeft": "175px" }}>Email or username</h4>
                    <input type="text" className="Boxer3" placeholder='Email or Username' onChange={(e) =>setEmail(e.target.value) } value={email} />
                    <h4 style={{ "fontSize": "14px", "marginTop": "30px", "color": "white", "marginLeft": "175px" }}>Password</h4>
                    <input type="password" className="Boxer3" placeholder='Password' onChange={(e) =>setPassword(e.target.value)} value={password} />
                    <button className="Boxer4" onClick={collect}>Log In</button>
                    <hr style={{ "height": "1px", "marginTop": "80px", "width": "534px", "marginLeft": "90px", "backgroundColor": "grey", "border": "none" }} />
                    <span style={{ "fontSize": "14px", "fontWeight": "heavy", "top": "30px", "color": "grey", "marginLeft": "215px" }}>Don't have an account? <Link to="/SignUp" style={{ "fontWeight": "bold", "color": "white", "left": "0px", }}>Sign Up for Musophile</Link></span>
                </div>
            </div>
        </div>
    );
}
export default Login;