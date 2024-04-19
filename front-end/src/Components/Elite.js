import React from 'react';
import Logo from '../images/Logo.jpg';
import Ad from '../images/Ad-free.png';
import Offline from '../images/Offline.png';
import Play from '../images/Play.png';
import Pay from '../images/Pay.png';
import Method from '../images/Method.png';
import Tick from '../images/Tick.png';
import {Link} from 'react-router-dom'
const Elite = () => {
    return (
        <div style={{backgroundColor:'white'}}>
            <div className="Offer" style={{ "fontFamily": "Arial, Helvetica, sans-serif" }}>
                <div className="sizes">
                    <span className="get">Get Eliteness Free For 1 month</span>
                    <span className="price">Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</span>
                    <div style={{display : "flex",justifyContent: "center",padding:"1%"}}>
                        <button className="GETS">< Link to="/Login" style={{"textDecoration":"none","color":"white"}}>GET STARTED</Link></button>
                        <button className="GETS1"><a href="#Main123" style={{"color":"black","fontWeight":"bold","textDecoration":"none"}}>SEE OTHER PLANS</a></button>
                    </div>
                    <span className="GETS2">Terms and conditions apply. 1 month free not available for users who have already tried
                        Eliteness.</span>
                </div>
            </div>
            <div className="Main" style={{ "fontFamily": "Arial, Helvetica, sans-serif" }}>
                <div className="explain">
                    <h1 id="A1" style={{ "marginTop": "70px" }}>The Power Of Being An Elite</h1>
                    <div className="box1" id="B1">
                        <img id="I1" src={Ad} alt="Ad-free" />
                        <p id="I2">Ad-free music listening</p>
                        <p id="I3">Enjoy uninterrupted music.</p>
                    </div>
                    <div className="box1" id="B2">
                        <img id="I1" src={Offline} alt="Ad-free" />
                        <p id="I2">Offline playback</p>
                        <p id="I3">Save your data by listening offline.</p>
                    </div>
                    <div className="box1" id="B3">
                        <img id="I1" src={Play} alt="Ad-free" />
                        <p id="I2">Play everywhere</p>
                        <p id="I3">Listen on your speakers,<br />TV and other favorite devices.</p>
                    </div>
                    <div className="box1" id="B4">
                        <img id="I1" src={Pay} alt="Ad-free" />
                        <p id="I2">Pay your way</p>
                        <p id="I3">Prepay with Paytm, UPI, and more.</p>
                    </div>
                </div>
            </div>
            <div className="Main1" id="Main123" style={{ "fontFamily": "Arial, Helvetica, sans-serif",display:"block" }}>
                <div className="explain1">
                    <h1 id="Pick" style={{"fontSize": "40px", "padding": "3%" }}>Elite Subscription</h1>
                    <h3 id="A2" style={{ "fontSize": "16px", "letterSpacing": "-0.5px", "fontWeight": "lighter", "marginTop": "0" }}>Listen without
                        limits on your phone, speaker, and other devices.</h3>
                    <img id="Pick1" src={Method} alt="Payment Method" />
                    <div className="box1" id="C1">
                        <div className="Mini">
                            <h3 className="plans" style={{ "fontWeight": "bolder", "padding": "5px 10px" }}>One-time plans available</h3>
                            <h2 style={{ "margin": "0", "marginTop": "5px" }}>Mini</h2>
                            <h3 style={{ "margin": "0", "marginTop": "5px", "fontSize": "16px", "fontWeight": "lighter" }}>From ₹7/day</h3>
                            <h3 style={{ "margin": "0", "marginTop": "5px", "fontSize": "16px", "fontWeight": "lighter", "marginBottom": "50px" }}>1
                                account on mobile only</h3>
                            <hr style={{ "marginLeft": "-4.5px", "width": "250px" }} />
                            <div style={{ "width": "250px", "height": "150px" }}>
                                <div style={{ "width": "30px", "height": "150px", "margin": "0", "display": "inline-block", "verticalAlign": "top" }}>
                                    <img src={Tick}
                                        style={{ "width": "30px", "marginLeft": "-5px", "marginTop": "15px", "marginBottom": "20px" }} alt="tick" />
                                    <img src={Tick} style={{ "width": "30px", "marginLeft": "-5px", "marginBottom": "10px" }} alt="tick" />
                                    <img src={Tick} style={{ "width": "30px", "marginLeft": "-5px", "marginBottom": "10px" }} alt="tick" />
                                </div>
                                <div style={{ "width": "200px", "height": "150px", "display": "inline-block" }}>
                                    <span style={{ "position": "relative", "top": "14px", "fontWeight": "400", "letterSpacing": "0.5px" }}>Ad-free
                                        music listening on<br /> mobile</span>
                                    <br />
                                    <span style={{ "position": "relative", "top": "23px" }}>Group Session</span>
                                    <br />
                                    <span style={{ "position": "relative", "top": "37px" }}>Download 30 songs on 1 mobile device</span>
                                </div>
                            </div>
                            <button className="viewplans">VIEW PLANS</button>
                            <a href="/" style={{ "color": "#535353", "position": "relative", "top": "10px", "fontSize": "12px" }}>Terms and conditions
                                apply.</a>
                        </div>
                    </div>
                    <div className="box1" id="C1" style={{ "marginLeft": "10px" }}>
                        <div className="Mini">
                            <h3 className="plans12" style={{ "fontWeight": "bolder" }}>1 month free</h3>
                            <h3 className="plans" style={{ "fontWeight": "bolder", "marginTop": "5px", "top": "4px", "padding": "5px 10px" }}>One-time plans
                                available</h3>
                            <h2 style={{ "margin": "0", "top": "10px" }}>Individual</h2>
                            <h3 style={{ "margin": "0", "top": "15px", "fontSize": "16px", "fontWeight": "lighter" }}>₹119/month after offer period</h3>
                            <h3 style={{ " margin": "0", "top": "19px", "fontSize": "16px", "fontWeight": "lighter", "marginBottom": "50px" }}>1
                                account</h3>
                            <hr style={{ "top": "-18px", "marginLeft": "-4.5px", "width": "250px" }} />
                            <div style={{ "width": "250px", "height": "150px" }}>
                                <div style={{ "width": "30px", "height": "150px", "margin": "0", "display": "inline-block", "verticalAlign": "top" }}>
                                    <img src={Tick} style={{ "width": "30px", "marginLeft": "-5px", "top": "0px", "marginBottom": "20px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "top": "-10px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "top": "-12px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                </div>
                                <div style={{ "width": "200px", "height": "150px", "display": "inline-block" }}>
                                    <span style={{ "top": "0px", "fontWeight": "400", "letterSpacing": "0.5px" }}>Ad-free
                                        music listening</span>
                                    <br />
                                    <span style={{ "top": "17px" }}>Group Session</span>
                                    <br />
                                    <span style={{ "top": "30px" }}>Download 10k songs/device on 5 devices</span>
                                </div>
                            </div>
                            <button className="viewplans" style={{ "top": "-18px" }}>VIEW PLANS</button>
                            <div style={{ "width": "250px", "height": "100px", "top": "-5px" }}>
                                <a href="/" style={{ "color": "#535353", "fontSize": "12px" }}>Terms and conditions apply.</a>
                                <span style={{ "color": "#535353", "fontSize": "12px" }}>1 month free not available for users who have already
                                    tried Eliteness.</span>
                            </div>
                        </div>
                    </div>
                    <div className="box1" id="C1">
                        <div className="Mini">
                            <h3 className="plans12" style={{ "fontWeight": "bolder" }}>1 month free</h3>
                            <h3 className="plans" style={{ "fontWeight": "bolder", "marginTop": "5px", "top": "4px", "padding": "5px 10px" }}>One-time plans
                                available</h3>
                            <h2 style={{ "margin": "0", "top": "10px" }}>Duo</h2>
                            <h3 style={{ "margin": "0", "top": "15px", "fontSize": "16px", "fontWeight": "lighter" }}>₹149/month after offer period</h3>
                            <h3 style={{ "margin": "0", "top": "19px", "fontSize": "16px", "fontWeight": "lighter", "marginBottom": "50px" }}>2 accounts
                            </h3>
                            <hr style={{ "top": "-18px", "marginLeft": "-4.5px", "width": "250px" }} />
                            <div style={{ "width": "250px", "height": "150px" }}>
                                <div style={{ "width": "30px", "height": "150px", "margin": "0", "display": "inline-block", "verticalAlign": "top" }}>
                                    <img src={Tick} style={{ "width": "30px", "marginLeft": "-5px", "top": "0px", "marginBottom": "20px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "top": "2px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "top": "-2px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                </div>
                                <div style={{ "width": "200px", "height": "150px", "display": "inline-block" }}>
                                    <span style={{ "top": "0px", "fontWeight": "400", "letterSpacing": "0.5px" }}>For couples who live
                                        together</span>
                                    <br />
                                    <span style={{ "top": "10px" }}>Ad-free music listening</span>
                                    <br />
                                    <span style={{ "top": "25px" }}>Group Session</span>
                                    <br />
                                    <span style={{ "top": "38px" }}>Download 10k songs/device, on 5 devices per account</span>
                                </div>
                            </div>
                            <button className="viewplans" style={{ "top": "-18px" }}>VIEW PLANS</button>
                            <div style={{ "width": "250px", "height": "100px", "top": "-5px" }}>
                                <a href="/" style={{ "color": "#535353", "fontSize": "12px" }}>Terms and conditions apply.</a>
                                <span style={{ "color": "#535353", "fontSize": "12px" }}>1 month free not available for users who have already
                                    tried Eliteness.</span>
                            </div>
                        </div>
                    </div>
                    <div className="box1" id="C1" style={{ "marginRight": "5px" }}>
                        <div className="Mini">
                            <h3 className="plans12" style={{ "fontWeight": "bolder" }}>1 month free</h3>
                            <h3 className="plans" style={{ "fontWeight": "bolder", "marginTop": "5px", "top": "4px", "padding": "5px 10px" }}>One-time plans
                                available</h3>
                            <h2 style={{ "margin": "0", "top": "10px" }}>Family</h2>
                            <h3 style={{ "margin": "0", "top": "15px", "fontSize": "16px", "fontWeight": "lighter" }}>₹179/month after offer period</h3>
                            <h3 style={{ "margin": "0", "top": "19px", "fontSize": "16px", "fontWeight": "lighter", "marginBottom": "50px" }}>Upto 6
                                accounts</h3>
                            <hr style={{ "top": "-18px", "marginLeft": "-4.5px", "width": "250px" }} />
                            <div style={{ "width": "250px", "height": "150px" }}>
                                <div style={{ "width": "30px", "height": "150px", "margin": "0", "display": "inline-block", "verticalAlign": "top" }}>
                                    <img src={Tick} style={{ "width": "30px", "marginLeft": "-5px", "top": "0px", "marginBottom": "20px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "top": "2px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "top": "-2px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                    <img src={Tick} style={{ "width": "30px", "top": "-5px", "left": "-5px", "marginBottom": "10px" }} alt="Tick" />
                                </div>
                                <div style={{ "width": "200px", "height": "150px", "display": "inline-block" }}>
                                    <span style={{ "top": "0px", "fontWeight": "400", "letterSpacing": "0.5px" }}>For family who live
                                        together</span>
                                    <br />
                                    <span style={{ "top": "10px" }}>Block explicit music</span>
                                    <br />
                                    <span style={{ "top": "23px" }}>Ad-free music listening</span>
                                    <br />
                                    <span style={{ "top": "38px" }}>Group Session</span>
                                    <br />
                                    <span style={{ "top": "51px" }}>Download 10k songs/device on 5 devices</span>
                                </div>
                            </div>
                            <button className="viewplans" style={{ "top": "-18px" }}>VIEW PLANS</button>
                            <div style={{ "width": "250px", "height": "100px", "top": "-5px" }}>
                                <a href="/" style={{ "color": "#535353", "fontSize": "12px" }}>Terms and conditions apply.</a>
                                <span style={{ "color": "#535353", "fontSize": "12px" }}>1 month free not available for users who have already
                                    tried Eliteness.</span>
                            </div>
                        </div>
                    </div>
                    <div className="university">
                        <span style={{alignContent: "center","fontSize": "24px", "fontWeight": "bolder" }}>Special discount for eligible students in
                            university</span>
                            <button style={{ "fontSize": "14px", "fontWeight": "bold", "borderRadius": "30px", "border": "2px solid black", "backgroundColor": "white", "width": "116px", "height": "52px", "padding": "14px 10px", "letterSpacing": "-0.5px",margin:"1%" }}><a style={{"textDecoration":"none","color":"black"}} href="/Elite" target="_blank">Learn More</a></button>
                    </div>
                </div>
            </div>

            <footer >
                <div className="contactDiv">
                    <div style={{"width": "95%", "height": "auto" }}>
                        <div className="about1">
                            <div style={{display:"flex",flexDirection:'column',width:"20%",marginTop:'1%'}}>
                                <li style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img src={Logo} className="img2" alt="Logo" /></li>
                                <a style={{textAlign:'center',color:'white',textDecoration:'none'}} className="pos" id="nav1" href="/">Musophile</a>
                            </div>
                            <div style={{display:"flex", width:"40%", marginTop:'2%'}} >
                                <div style={{ width : "30%", "fontFamily": "Arial, Helvetica, sans-serif", "letterSpacing": "1px",marginRight:'10%' }}>
                                    <h4 style={{ "color": "#919496", "marginBottom": "20px", "fontSize": "12px" }}>COMPANY</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>About</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Jobs</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>For the record</h4>
                                </div>
                                <div className="communities">
                                    <h4 style={{ "color": "#919496", "marginBottom": "20px", "fontSize": "12px" }}>COMMUNITIES</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>For Artists</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Developers</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Advertising</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Investors</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Vendors</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Musophile For Work</h4>
                                </div>
                                <div style={{width : "30%", "fontFamily": "Arial, Helvetica, sans-serif", "letterSpacing": "1px" }}>
                                    <h4 style={{ "color": "#919496", "marginBottom": "20px", "fontSize": "12px" }}>USEFUL LINKS</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Support</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Web Player</h4>
                                    <h4 style={{ "color": "#FFFFFF", "marginBottom": "20px" }}>Free Mobile App</h4>
                                </div>
                            </div>
                            <div style={{width:"25%",display:"flex",marginTop:'1%'}}>
                                    <a style={{height:"0px"}} href="https://www.linkedin.com/in/rajat-garg-72b15a226/"target="_blank"><i className="fab fa-linkedin fa-2x"  style={{ "color": "#ffffff", "padding": "15px", "marginRight": "10px", "display": "inline-block", "borderRadius": "50px", "border": "none", "backgroundColor": "#222326", "cursor": "pointer" }}></i></a>
                                    <a style={{height:"0px"}} href="https://github.com/rajatgarg2004?tab=repositories" target="_blank"><i className="fab fa-github fa-2x" style={{ "color": "#ffffff", "padding": "15px", "marginRight": "10px", "display": "inline-block", "borderRadius": "50px", "border": "none", "backgroundColor": "#222326", "cursor": "pointer" }}></i></a>
                                    <a style={{height:"0px"}} href="https://www.hackerrank.com/rajatgarg2004?hr_r=1" target="_blank"><i class="fab fa-hackerrank fa-2x" style={{ "color": "#ffffff", "padding": "15px", "marginRight": "10px", "display": "inline-block", "borderRadius": "50px", "border": "none", "backgroundColor": "#222326", "cursor": "pointer" }}></i></a>
                            </div>
                        </div>
                        <div style={{ "color": "#919496", "fontFamily": "Arial, Helvetica, sans-serif",display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
                            <h3 style={{ "display": "inline-block", "fontSize": "12px" }}>Legal</h3>
                            <h3 style={{ "display": "inline-block", "fontSize": "12px" }}>Privacy Center</h3>
                            <h3 style={{ "display": "inline-block", "fontSize": "12px" }}>Privacy Policy</h3>
                            <h3 style={{ "display": "inline-block", "fontSize": "12px" }}>Cookies</h3>
                            <h3 style={{ "display": "inline-block", "fontSize": "12px" }}>About Ads</h3>
                            <h3 style={{ "display": "inline-block", "fontSize": "12px" }}>Accessibility</h3>
                            <h3 style={{ "display": "inline-block", "fontSize": "12px"}}>2023 Musophile</h3>
                            <span style={{float : "right", "color": "#919496", "fontFamily": "Arial, Helvetica, sans-serif", "fontSize": "12px" }}><i className="fas fa-globe" style={{ "color": "#ffffff" }} ></i> India (English)  </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Elite;