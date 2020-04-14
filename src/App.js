import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Header from './components/header/Header.js';
import Register from './components/register/Register.js';
import Login from './components/login/Login.js'; 
import Footer from './components/footer/Footer.js';
import Thanks from './components/thanks/Thanks.js';
import MemberAdd from './components/member-add/MemberAdd.js';
import Dashboard from './components/dashboard/Dashboard.js'; 
import DocumentList from './components/document-list/DocumentList.js';
import ContactUs from './components/contact_us/ContactUs.js'; 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={ registerDetails:'',
    memberDetails:''
   };
    this.updateData=this.updateData.bind(this);
    this.memberUpdate=this.memberUpdate.bind(this);
    this.memeberPic=this.memeberPic.bind(this);

  }

   
  updateData = (data) => {
    console.log(data)
    this.setState({ registerDetails: data }
     
     
    );
  
  }

  memberUpdate =(memData) => {
    this.setState({memberDetails:memData},
      function () {  
        console.log(456);
        console.log(this.state.memberDetails.name); 
      }
      );
  }

  memeberPic=(memPic) =>{
    this.setState({memberProfile:memPic},
    function(){
    console.log('pic');
    console.log(this.state.memberProfile);
    }
     
    );
  }

  render(){
  return(
    <div className="App">
      
        <Router>
        <Header/>
        
        
        <Switch>
        <Route exact path='/' component={Login}/> 
        <Route path='/contact-us' component={ContactUs}/> 
        <Route path='/member-add'  render={props=><MemberAdd {...props} 
                           memberData={this.memberUpdate} propic= {this.memeberPic} />} /> 
        <Route path='/dashboard'   render={props=><Dashboard {...props} 
                         updateDisplay={this.state.memberDetails}  />}/> 
        <Route path='/register'  render={props=><Register {...props} 
                          newVar= {this.updateData}  />}/>    
          <Route path='/document-list'  render={props=><DocumentList {...props} 
                         updateAdd={this.state.memberDetails}  />}/> 
          <Route path="/thanks"  render={props=><Thanks {...props}   
          updatename={this.state.registerDetails}  />} /> 
  
          </Switch>
          <Footer/>
        </Router>
      
     </div>
  );
  }
}
export default App;
