import React from 'react';
import bullet from '../../assets/images/bullet.png';
import './ContactUs.css';

class ContactUs extends React.Component {
    render(){
        return (
            <div className="container-fluid custom-content">
                <div className="p-0 p-md-4 p-2 card card-no-border">    
                    <div className="mt-0 mb-5">
                        <h2 className="card-title font-200">Customer Services</h2>
                        <div className="col-12 float-left p-0 m-0 mt-5" id="getOnTouch">
                            <div className="col-1 float-left m-0 p-0">
                                <img height="50px" width="50px" src={bullet} alt="bullet" />
                            </div>
                            <div className="col-11 m-0 pl-4 float-left">
                                <h2 className="font-weight-bold">Get in touch by phone</h2>
                                <h2 className="font-weight-bold">0345 601 7721</h2> 
                                <p className="mb-0">
                                    Phone lines are open:
                                </p>
                                <p className="mb-0">
                                    Monday-Friday: 9:00am-5:00pm<br />Saturday: Closed<br />Sunday: Closed
                                </p>
                                <p className="mt-3">Charges may apply, check your provider's tariff guide.</p>
                            </div> 
                        </div>
                        <div className="col-12 float-left p-0 m-0 mt-3" id="writeToUs">
                            <div className="col-1 float-left m-0 p-0">
                                <img height="50px" width="50px" src={bullet} alt="bullet" />
                            </div>
                            <div className="col-11 m-0 pl-4 float-left">
                                <h2 className="font-weight-bold">Write to us</h2>
                                <p className="mb-0">
                                    You can write to us at:<br />Aegon Workplace Investing<br />PO Box 17486<br />Edinburgh<br />EH12 1NU
                                </p>
                                <p className="mb-0 mt-4"> 
                                    You can also email us at:<br />My.pension@aegon.co.uk
                                </p>
                            </div>
                        </div>
                        <div className="col-12 float-left p-0 m-0 mt-4" id="SubmitAcomplaint">
                            <div className="col-1 float-left m-0 p-0">
                                <img height="50px" width="50px" src={bullet} alt="bullet" />
                            </div>
                            <div className="col-11 m-0 pl-4 float-left">
                                <h2 className="font-weight-bold">Submit a complaint</h2>
                                <div>We hope you never have cause to complain, but if you do, please contact us by any of the methods below:<br /><br />You can email or write to us at the above addresses.<br /><br />When contacting us by email, please don't include any personal or banking information as email isn't a secure form of communication.<br /><br />You may also be eligible to complain to the Financial Services Ombudsman, please refer to <a href="#" rel="noopener">the official Financial Services Ombudsman website</a> for further information.</div>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
        );
    }
}

export default ContactUs;
