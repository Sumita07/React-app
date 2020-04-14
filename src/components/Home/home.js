import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'sdfsf'};
    
        this.handleChanges = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      handleChange(abc){
        this.setState({value: abc.target.value});   
      }
      handleSubmit(efg){
        alert('A name was submitted: ' + this.state.value);
        efg.preventDefault();
      }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChanges} />
            
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
  }
}

export default Home;

 
