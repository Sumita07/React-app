import React from 'react';
import './Login.css';
import SecurityInfo from '../security-info/SecurityInfo.js';
import $ from 'jquery';
class Login extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			phone: '',
			password: '',
			login_obj: {}
		};

		this.valueUpdate = this.valueUpdate.bind(this);
		this.login = this.login.bind(this);
	}

	  
	valueUpdate(event){
		//this.setState({phone: event.target.value, password: event.target.value});
		this.setState({[event.target.name]: event.target.value });
		console.log(this.state);
	}

	login(e){
		//alert('phone:'+this.state.phone);
		//alert('password:'+this.state.password);
		e.preventDefault();
		this.login_obj = {username:this.state.phone};
		localStorage.setItem('testObject', JSON.stringify(this.login_obj));
		$('#form1').parsley();
		this.props.history.push('/dashboard');
	}

	render(){
		return (
			<div className="container-fluid custom-content">
				<div className= "row justify-content-center">
					<div className="col-lg-7 custom-login">
						<div className="card p-2 p-md-4 mb-4">
							<div className="card-body">
								<h4 className="card-title text-success">Log In</h4><br/>
								<form className="form form-register form-group" id="form1" onSubmit={this.login}>
									<div className="form-field flex-wrap">
										<input name="phone" id="register-username" type="text"
											className="form-input form-control order-last mb-1 js-usabilla-secure-blur custom-input" onChange={(event)=>this.valueUpdate(event)} autoComplete="off" data-parsley-required="true"></input>
										<label className="user label label-align" htmlFor="register-username">Phone Number</label>
									</div>
									<div className="form-field flex-wrap">
										<input name="password" id="register-email" type="password"
											className="form-input form-control order-last mb-1 js-usabilla-secure-blur custom-input" onChange={(event)=>this.valueUpdate(event)} autoComplete="off" data-parsley-required="true"></input>
										<label className="user label label-align" htmlFor="register-email">Password</label>
									</div>
									<div className="form-field text-center">
										<input type="submit" className="btn btn-themed btn-lg p-3 waves-effect brand-btn pull-right" value="Login"></input>
									</div>
								</form>
							</div>
						</div>
					</div>
					
					<SecurityInfo/>
					
				</div>
			</div>
		);
	}
}

export default Login;
