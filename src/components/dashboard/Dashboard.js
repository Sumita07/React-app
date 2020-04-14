import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			memberName: this.props.updateDisplay.name,
			
		}
	}


	

	render(){
		return (
			<div className="container-fluid custom-content mt-5 pt-5">
				<div className="dashboard">
				
					<div className="row">
						<div className="col-10">
						
							<div className="card">
								<div className="card-body">
								<Link to='/document-list' className="remove-underline" >
									<h4 className="card-title">Member Details 1</h4>
									<p className="card-text mb-3">{this.state.memberName}</p>
								</Link>
									<Link to='/member-add' className="card-link mt-2" >Edit</Link>
									<span className="mx-2"> | </span>
									<Link to="#" className="card-link">Delete</Link>
								</div>
							</div>
							

						</div>
						<div className="col-2">
							<Link className="btn btn-success mt-3" to='/member-add'>Add New</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
