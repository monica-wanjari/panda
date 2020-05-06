import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/form.css'
import {Link} from 'react-router-dom'


const Form=()=>{
    return(
       <div className="container-fluid">
           <div className="row">
               <div className="col-md-5">
                    <img src={process.env.PUBLIC_URL +"/car3.jpg"} alt="mypic" width="100%"/>
                </div>
               <div className="col-md-7 forme">
                    <h2>Booking details</h2>
                    <h3><span>Rent</span>VRoom</h3>
                    <form  action="Server.php" className="formfirst" method="post">
                        <fieldset>
                            <div className="form-group form_first first_margin">
                                <div className="wthree_input">
                                    <label>Full Name</label>
                                    <input id="Name" type="text" name="name" className="form-control" placeholder="Jane Doe" required="" />
                                </div>
                            </div>
                            <div className="form-group form_first">
                                <div className="wthree_input">
                                    <label>Phone Number</label>
                                   <input id="phone" type="text" name="phone" className="form-control" placeholder="+91" required="" />
                                </div>
                            </div>
                            <div className="form-group form_first first_margin">
                                <div className="wthree_input">
                                    <label>Issue Date</label>
                                    <input id="issue" type="date" name="issue" className="form-control" placeholder="Subject" required="" />
                                </div>
                            </div>
                            <div className="form-group form_first">
                                <div className="wthree_input">
                                    <label>Return Date</label>
                                    <input id="return" type="date" name="return" className="form-control" placeholder="Password" required="" />
                                </div>
                            </div>
                        </fieldset>
                        <Link to="Card"><button className="btn" name="registrations">Book Car</button></Link>
                        <button className="button">Back</button>
                        </form>
                </div>
           </div>
       </div>
    )

}
export default Form