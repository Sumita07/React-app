import React from 'react';

import './Register.css';
import { Redirect } from 'react-router';
import SecurityInfo from '../security-info/SecurityInfo.js';
import serialize  from 'form-serialize';

class Register extends React.Component {


	constructor(props){
		super(props);
		this.state={ formData:[]
		};
		// this.handleChange = this.handleChange.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}
	// handleChange(event){
	// 	this.setState({[event.target.name]: event.target.value  }); 
	// }




	handleRegister(e){
		e.preventDefault();
		var serialize = require('form-serialize');
		var form = document.querySelector('#register-form');
		var obj = serialize(form, { hash: true });
		var str = serialize(form);
		this.setState({ formData:obj });
	
		this.props.newVar(obj);
	
	
        this.props.history.push('/thanks'); 
	}

  render() {
    return (
<main id="main" >
	<section>
		<div className="negmargin">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-7">
						<div className="card p-2 p-md-4 mb-4">
							<div className="card-body">
								<h3 className="card-title text-success">Register</h3>
								<form className="form form-register form-group" method="post"  onSubmit={this.handleRegister} id="register-form">
										<div className="form-field  flex-wrap">
											<input name="name" id="register-username" type="text" 
											className="form-input form-control order-last mb-1 js-usabilla-secure-blur" autoComplete="off"  
											required/>
											<label className="user  label label-align" htmlFor="register-username">Name</label>
										</div>
										<div className="form-field  flex-wrap">
											<input name="email" id="register-email" type="text" 
												className="form-input form-control order-last mb-1 js-usabilla-secure-blur" autoComplete="off"  
												/>
											<label className="user  label label-align" htmlFor="register-email">Email</label>
										</div>
										<div className="form-field  flex-wrap">
											<input name="phone" id="register-phone" type="text"
											className="form-input form-control order-last mb-1 js-usabilla-secure-blur"   autoComplete="off"
										 />
										<label className="user  label label-align" htmlFor="register-phone">Phone Number</label>
										</div>
										<div className="form-field  flex-wrap">
											<input name="password" id="register-password" type="text"
												className="form-input form-control order-last mb-1 js-usabilla-secure-blur"   autoComplete="off" 
												 />
											<label className="user  label label-align" htmlFor="register-password">Password</label>
											</div> 
										<div className="form-field  flex-wrap">
											<input name="confirmPassword" id="register-confirm" type="text"
												className="form-input form-control order-last mb-1 js-usabilla-secure-blur"   autoComplete="off" 
												 />
											<label className="user  label label-align " htmlFor="register-confirm">Confirm Password</label>
										</div> 
										

										<div className="form-field  flex-wrap"> 
											<select className="custom-select" id="register-question"  aria-hidden="true"  >
												<option value="">Security Question</option>
												<option value="All">Your place of birth</option>
												<option value="Equity">Your first school?</option>
												<option value="Balanced">Your pet name?</option>
											</select> 
										</div>
										<div className="form-field  flex-wrap">
											<input name="answer" id="register-answer" type="text"
											className="form-input form-control order-last mb-1 js-usabilla-secure-blur"   autoComplete="off"
											 />
											<label className="user  label label-align" htmlFor="register-answer">Answer</label>
										</div>
										<div className="form-field">
											<input type="submit" className="btn btn-primary" value="Register" />
										</div>
									</form>
								</div>
							</div>
						</div>
						<SecurityInfo/>
					</div>
				</div>
			</div>
	</section>
	
</main>
      );
  }
}

export default Register;

 
