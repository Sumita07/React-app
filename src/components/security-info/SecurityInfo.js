import React from 'react';
import './SecurityInfo.css';
import securityInfoImg from '../../assets/images/security-info.svg';

class SecurityInfo extends React.Component {
   
  render() {
    return (
        <aside className="col-lg-4" role="complementary" >
                            
    <div className="card card-no-border mb-5">
       <div className="card-sm-only-horizontal card-md-only-horizontal">
       <img src={securityInfoImg} alt="security-info" className="card-img-top img-fluid" />                     
             <div className="card-body">
             
                 <h3 className="card-title">Safe and Secure</h3>
                   <p className="card-text">
                    Our <a href="/contact-us">staying safe guide</a> gives you more information
                    on how to reduce the risk of identity fraud.
                    </p>
            </div>
        </div>
        </div>
 </aside>
      );
  }
}

export default SecurityInfo;

 
