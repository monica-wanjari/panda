import React from 'react'
import '../components/card.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeDropper, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom'
const Card = () => {
    function sayHello() {
        alert('Not Available!');
    }
    function say() {
        alert('Not Available');
    }
    function car() {
        alert('Available');
    }
    return (

        <div className="container-fluid">
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="images">
                                <img src={process.env.PUBLIC_URL + "/honda.jpg"} alt="mypic" width="90%" height="170vh" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="headings">
                                <h3>Hyundai Grand i10</h3>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faEyeDropper} />
                                <p style={{ fontSize: "18px" }}>blue</p>
                            </div>
                            <div className="icon_one">
                                <FontAwesomeIcon icon={faWheelchair} />
                                <p style={{ fontSize: "18px" }}>4Seat</p>

                            </div>
                        </div>
                        <div className="col-md-4 amt">
                            <h2>350 Rs</h2>
                            <div className="buttontwo">
                                <button className="btn" onClick={sayHello}>Book Now</button>
                            </div>
                            <div className="buttonone">
                                <Link to="Information"><button className="btn">Details</button></Link> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="images">
                                <img src={process.env.PUBLIC_URL + "/ford.webp"} alt="mypic" width="90%" height="170vh" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="headings">
                                <h3>Ford EcoSport</h3>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faEyeDropper} />
                                <p style={{ fontSize: "18px" }}>Blue</p>
                            </div>
                            <div className="icon_one">
                                <FontAwesomeIcon icon={faWheelchair} />
                                <p style={{ fontSize: "18px" }}> 4Seat</p>
                            </div>
                        </div>
                        <div className="col-md-4 amt">
                            <h2>1350 Rs</h2>
                            <div className="buttontwo">
                                <button className="btn" onClick={say}>Book Now</button>
                            </div>
                            <div className="buttonone"> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="images">
                                <img src={process.env.PUBLIC_URL + "/i10G.jpg"} alt="mypic" width="90%" height="170vh" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="headings">
                                <h3>Maruti Suzuki XL6</h3>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faEyeDropper} />
                                <p style={{ fontSize: "18px" }}>Red</p>
                            </div>
                            <div className="icon_one">
                                <FontAwesomeIcon icon={faWheelchair} />
                                <p style={{fontSize:"18px"}}> 6Seat</p>
                            </div>
                        </div>
                        <div className="col-md-4 amt">
                            <h2>850 Rs</h2>
                            <div className="buttontwo">
                                <button className="btn" onClick={car}>Book Now</button>

                            </div>
                            <div className="buttonone">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="images">
                                <img src={process.env.PUBLIC_URL + "/maruti-suzuki.jpg"} alt="mypic" width="90%" height="170vh" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="headings">
                                <h3>Honda CR-v</h3>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faEyeDropper} />
                                <p style={{ fontSize: "18px" }}>Blue</p>
                            </div>
                            <div className="icon_one">
                                <FontAwesomeIcon icon={faWheelchair} />
                                <p style={{ fontSize: "18px" }}> 4Seat</p>
                            </div>
                        </div>
                        <div className="col-md-4 amt">
                            <h2>450Rs</h2>
                            <div className="buttontwo">
                                <button className="btn" onClick={say}>Book Now</button>

                            </div>
                            <div className="buttonone">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="topic">
                    <h2>Rent Vroom</h2>
                </div>
                <div className="campany">
                    <h3>Rentvroom Pvt.Ltd</h3>
                </div>
                <div className="address">
                    <p>No.296,3rd Cross Rd, Jakkasandra,1st Block,Koramangla<br />Bengaluru,Karnataka 560034</p>
                </div>
                <div className="icons">
                    <SocialIcon network="twitter" />
                </div>
                <div className="icons">
                    <SocialIcon network="instagram" />
                </div>
                <div className="icons">
                    <SocialIcon network="linkedin" />
                </div>
            </div>
        </div>

    );
}
export default Card
