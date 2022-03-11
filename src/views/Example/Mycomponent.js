import React from "react";
import ChidComponent from "./ChildComponent";

class Mycomponent extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    arr: [
      { id: '123', title: 'testone', salary: '500$' },
      { id: '456', title: 'testtow', salary: '200$' },
      { id: '1789', title: 'testthere', salary: '300$' }
    ]
  }
  hendleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })

  }
  hendleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  hendleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  
  
  render() {
    // console.log(this.state);
    // const name = 'Hop';
    return (
      <>
      <form>
        <label htmlFor="fname">Ten cua ban</label><br />
          <input type="text" id="fname" name="fname" value={this.state.firstName}
          onChange={(event)=> this.hendleChangeFirstName(event)}
          /><br />
        <label htmlFor="lname">Ho cua ban:</label><br />
          <input type="text" id="lname" name="lname" value={this.state.lastName}
          onChange={(event)=> this.hendleChangeLastName(event)}
          /><br />
          <input type="submit" value="submit"
          onClick={(event)=> this.hendleSubmit(event)}
          />
        </form>
        <ChidComponent name={this.state.firstName} age={'24'} arr={this.state.arr} />
      </>
    )
  } 
}

export default Mycomponent;