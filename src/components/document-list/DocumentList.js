import React from 'react';
import { Link } from 'react-router-dom';
import './DocumentList.css';
class DocumentList extends React.Component {
  constructor(props){
		super(props);
		this.state={
      memberName: this.props.updateAdd.name,
      memberEmail: this.props.updateAdd.email,
      memberPhone: this.props.updateAdd.phone,
      memeberPic: this.props.updateAdd.profilePic,
    
		};

	}

 
    
  render() {
    return (

      <main id="main" >
      <section>
        <div className="negmargin">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card p-2 p-md-4 mb-4">
                  <div className="card-body alert-info">

                    <h3 className="card-title">
				             <span>Member Details</span>
			              </h3>
			              <p className="card-text"></p>
                  
                        <div className="row">
                        
                          <div className="col-3 mb-3">Name: </div>
                          <div className="col-9 mb-3 text-primary" id="descName">{this.state.memberName}</div>
                        </div>
                      
                        <div className="row">
                          <div className="col-3 mb-3">Email ID: </div>
                          <div className="col-9 mb-3 text-primary" id="descEmail">{this.state.memberEmail}</div>
                        </div>
                        <div className="row">
                          <div className="col-3 mb-3">Phone Number: </div>
                          <div className="col-9 mb-3 text-primary" id="descPhone">{this.state.memberPhone}</div>
                        </div>
                        <img src={this.state.profilePic} alt="profile-pic"/>

                        

                      
                    
                    </div>
                    <div className="mt-3" >
                    <Link to='/dashboard'>
                      <button type="button" className="btn btn-success">Back</button>
                    </Link>
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

export default DocumentList;

 
