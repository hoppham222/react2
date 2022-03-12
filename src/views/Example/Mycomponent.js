import React from "react";
import ChidComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class Mycomponent extends React.Component {

  state = {
    arr: [
      { id: '123', title: 'testone', salary: '500' },
      { id: '456', title: 'testtow', salary: '200' },
      { id: '1789', title: 'testthere', salary: '300' }
    ]
  }
 
  addNewJob = (job) => {
    console.log(job);
    this.setState({
      arr: [...this.state.arr, job]
    })
  }
  
  render() {
    // console.log(this.state);
    // const name = 'Hop';
    return (
      <>
        <AddComponent addNewJob={this.addNewJob}/>
        <ChidComponent arr={this.state.arr} />
      </>
    )
  } 
}

export default Mycomponent;