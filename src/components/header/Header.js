import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../assets/images/aegon-logo.png';
import './Header.css';
class Header extends React.Component {
   
     
  render() {
    return (
        <header role="banner" className="header d-flex flex-column align-items-end w-100">
        <div className="container-fluid header-wrapper">
         
         
            <div className="alert alert-warning alert-dismissible mb-0 js-cookie-message       
                hidden-print d-flex w-100 py-1 rounded-0" role="alert">
                <p className="mb-0">
                    We use cookies to give you the best possible experience on our website, please read our
                    <button className="cookies-link btn btn-link" href="#">Cookie Policy
                    </button>.
                </p>
                <button className="btn btn-link btn-sm close align-self-middle ml-auto mt-2 mt-md-0 cookies-link-close"
                    type="button" data-dismiss="alert" aria-label="Close">
                    <small className="hidden-md-down">Close (esc)</small>
                    <span className="icon icon-cp-close ml-2" aria-hidden="true"></span>
                </button>
            </div>
            <div>
                <nav className="navbar navbar-expand-md d-flex justify-content-between px-0 py-0 
                    w-100" id="main-nav">
    
                    <div className="header-logo navbar-brand mx-2">
                        
                        <img src={logo} alt="aegon-logo" />
                      
                        <span className="sr-only">Aegon</span>
                    </div>
    
                    <span className="font-weight-bold"></span>
                    <button
                        className="navbar-toggler-right btn btn-header order-last align-self-center collapsed hidden-md-up mr-2 ml-auto hidden-print get-contact"
                        type="button" data-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon mr-2"><span></span><span></span><span></span></span>Menu<span
                        className="sr-only">(Show/hide mobile navigation)</span>
                    </button>
    
                    <div className="navbar-collapse-sm-wrap mt-0 hidden-print order-last bg-white dropdown-overlay-dashboard">
    
    
                        <div id="navbarSupportedContent" className="collapse navbar-collapse">

                                <Link to='/contact-us'
                                    className=" text-primary text-left  order-first mb-3 mb-md-0 ml-md-2 mr-md-4">
                                   
                                    Contact Us
                                </Link>
                               
                                
                               
                                <Link to='/register' className="btn btn-md btn-success btn-block-md-only 
                                text-left order-md-last order-first mb-3 mb-md-0 ml-md-2 mr-md-4"> Register</Link>

                             
                               
                               
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div className="container-fluid text-reverse w-100">
            <div id="global-notifications-container"></div>
        </div>
    
        <div className="container-fluid text-reverse d-flex flex-column justify-content-center w-100 mt-0">
            <div className="flexbug-1-fix justify-content-between align-self-center align-items-end col-lg-11 p-0">
              
    
                <div className="float-left" id="profile-name"></div>
            </div>
    
            
        </div>
       
    </header>
      );
  }
}

export default Header;

 
