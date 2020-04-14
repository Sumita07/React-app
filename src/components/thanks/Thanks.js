import React from 'react';
import { Link } from 'react-router-dom';
import './Thanks.css';
class Thanks extends React.Component {
	constructor(props){
		super(props);
		this.state={
      username: this.props.updatename.name,
    
		};
	
	}

 
    
  render() {
    return (

      <main id="main" >
      <section>
        <div className="negmargin">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card p-2 p-md-4 mb-4">
                  <div className="card-body alert-success">
     
                    <h3><span>Welcome</span><span  className="text-success"> {this.state.username}</span> </h3>
                    <h4 className="text-success">Thank You for registering with us...!!</h4>
                    <div
                    className="polite">Click here to
                    <Link to='/'
                    className=" text-primary text-left  order-first mb-3 mb-md-0 ml-md-2 mr-md-4">
                      Login 
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      );
  }
}

export default Thanks;

 
