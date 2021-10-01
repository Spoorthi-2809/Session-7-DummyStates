import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let phonenumber = this.state.phonenumber;
    if (!Number(phonenumber)) {
      alert("Your phone number must be a number");
    }
    if(!Number == 10(phonenumber)) {
      alert("Your phone number should be 10 digits");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
    if (!Number(val)) {
        alert("Your phone number must be a number");
      }
    if(!Number(val)) {
      alert("Your phone number should be 10 digits");
    }
      this.setState({[nam]: val});
    }
  render() {
    return (
      <form>
        <h1>User Form</h1>
        <p>Phone Number:</p>
        <input
        type="text"
        onChange={this.myChangeHandler}
        />
        <br/>
        <br/>
        <p> Has Data Pack</p>
        <input type="radio" value="Has Data Pack" name="Data" /> Yes 
        <br/>
        <br/>
        <input type="radio" value="Has Data Pack" name="Data" /> No
        <br/>
        <br/>
        <input
        type="submit"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
