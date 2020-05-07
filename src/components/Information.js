import React from 'react'
import Popup from "reactjs-popup"
import 'bootstrap/dist/css/bootstrap.min.css'
//import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeDropper,faWheelchair} from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';
import '../components/information.css'
const Information=()=>{
	
    return(
		
		<div className="container-fluid just">
			<h3 style={{textAlign:"center"}}><span style={{color:"aqua"}}>Rent</span>VRoom</h3>
            <div className="card">
			    <div className="container">
					
				    <div className="row">
						
					    <div className="col-md-7">
					        <div className="image">
								<img src={process.env.PUBLIC_URL + "/i10.jpg"} alt="mypic" width="100%" />
					        </div>
					    </div>
					    <div className="col-md-5 tiny">
						    <div className="heading">
							    <h3>Hyundai Grand i10</h3>
						    </div>
						    <div className="sam">
						        <div className="icon">
							        <FontAwesomeIcon icon={faEyeDropper}/>
							        <p>white</p>
						        </div>
						        <div className="icon_one">
							        <FontAwesomeIcon icon={faWheelchair} />
							        <p> 4 Seat</p>
						        </div>
						    </div>
						    <div className="info">
							    <p>Rent per day:Rs.350</p>
						    </div>
						    <div className="sau">
						        <div className="button">
									<Popup modal trigger={<button className="btn">Book Now</button>}>
										Submit Successfully!!!!.. Have a safe Journey<br/>
										You Have Booking: Hyundai Grand i10<br/>
										For The Duration:02/04/2020-05/04/2020
                                    </Popup>
							        <p style={{fontSize:"10px",marginRight:"10px"}}>Currently Unava.</p>
						        </div>
						    </div>
					    </div>
				    </div>
			    </div>
		    </div>
			<div className="container">
				<div className="cardetail">
					<h2>Car Detail</h2>
					<hr/>
					<button class="bug">Not Available <FontAwesomeIcon/></button>
					<div className="id">
						<h3>Vehicle Number:18 D 4356</h3>
					</div>
					<div className="type">
						<h3>Petrol Car</h3>
					</div>
					<div className="petrol">
					<h3>1.2 Kappa Dual VTVT BS6 Petrol Engine</h3>
					</div>
					<div className="about">
					<p>Hyundai Grand i10 NIOS comes with Wonder Warranty option of upto 5 year std.Customer can choose any warranty of upto 5 year std.Customer can choose any warranty option as per his
					driving requirement at time of new vehicle at time of new vehicle delivery.From a strong body structure to Standard Dual airbags and ABS with EBD,maximum
					care has been taken to integrate a plethora of safety features.</p>
					</div>
				</div>
				<div class="cartable">
					<h2>Current Booking</h2>
					<hr/>
					<table>
						<tr>
							<th>First Name</th>
							<th>Phone Number</th>
							<th>Issue Date</th>
							<th>Return Date</th>
						</tr>
						<tr>
							<td>Joe Doe</td>
							<td>+917905654483</td>
							<td>25th Jan '20</td>
							<td>28th Jan '20</td>
						</tr>
					</table>
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
					<p>No.296,3rd Cross Rd, Jakkasandra,1st Block,Koramangla<br/>Bengaluru,Karnataka 560034</p>
				</div>
				<div className="icons">
					<SocialIcon network="twitter"/>
				</div>
				<div className="icons">
					<SocialIcon network="instagram"/>
				</div>
				<div className="icons">
					<SocialIcon network="linkedin"/>
				</div>
			</div>
		</div>
	);
	
}
export default Information;