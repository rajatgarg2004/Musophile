import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/Logo.jpg';
const SignUp = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/SignUp');
        }
    }, [])
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const collect = async () => {
        if ((!username || !email || !password)) {
            setError(true);
            return false;
        }
        else {
            let result1 = await fetch('http://localhost:3050/search/' + email)
            result1 = await result1.json();
            let result2 = await fetch('http://localhost:3050/search1/' + username)
            result2 = await result2.json();
            if (result1.length < 1 && result2.length < 1) {
                let result = await fetch('http://localhost:3050/register', {
                    method: 'post',
                    body: JSON.stringify({ username, email, password }),
                    headers: {
                        'Content-Type': 'application/json'
                    },

                })
                result = await result.json();
                localStorage.setItem("user", JSON.stringify(result));
                navigate('/Elite');

            }
            else if (result1.length >= 1 && result2.length < 1) {
                alert("Email already exists");
            }
            else if (result1.length < 1 && result2.length >= 1) {
                alert("Username already exists");
            }
            else if (result1.length >= 1 && result2.length >= 1) {
                alert("Both Username and Email already exist");
            }
        }
    }
    return (
        <div className="Logger">
            <div className="Boxer1">
                <div className="logo-container">
                    <img src={Logo} alt="Logo" width='20%' height='10%' className="logoComponent" ></img>
                </div>
                <h1 style={{ "fontSize": "32px", "left": "-10px", "letterSpacing": "-1.5px", "textAlign": "center", "marginTop": "30px", "color": "white" }}>Sign up for free to start listening</h1>
                <h1 style={{ "fontSize": "20px", "marginTop": "30px", "fontWeight": "bolder", "color": "white" }}>Enter Your Username</h1>
                <input className="register1" type="text" placeholder='Enter Username' onChange={(e) => { setUsername(e.target.value) }} value={username}></input>
                {error && !username && <span className="Help" style={{ color: "red", marginTop: "5px" }}>Enter Valid Username</span>}
                <h1 style={{ "fontSize": "20px", "marginTop": "30px", "fontWeight": "bolder", "color": "white" }}>Enter Your Email</h1>
                <input className="register1" type="text" placeholder='Enter Email' required onChange={(e) => { setEmail(e.target.value) }} value={email}></input>
                {error && !email && <span className="Help" style={{ "color": "red", marginTop: "5px" }}>Enter Valid Email</span>}
                <h1 style={{ "fontSize": "20px", "marginTop": "30px", "fontWeight": "bolder", "color": "white" }}>Enter the password</h1>
                <input className="register1" type="password" placeholder='Enter Password' required onChange={(e) => { setPassword(e.target.value) }} value={password}></input>
                {error && !password && <span className="Help" style={{ "color": "red", "left": "150px", "display": "block", "top": "5px" }}>Enter Valid Password</span>}
                <button className="button123" onClick={collect}>Sign-Up</button>
                <span style={{ "fontSize": "14px", "fontWeight": "heavy", "color": "grey", "top": "100px", "display": "block" }}>Have an account?</span>
                <Link to="/Login" style={{ "fontWeight": "bold", "top": "110px", "color": "white" }}>Log In to Musophile</Link>
            </div>
        </div>
    )

}

export default SignUp;