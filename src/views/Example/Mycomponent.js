import React from "react";
import ChidComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class Mycomponent extends React.Component {

  state = {
    arr: [
      { id: '123', title: 'testone', salary: '500' },
      { id: '456', title: 'testtow', salary: '700' },
      { id: '1789', title: 'testthere', salary: '900' }
    ]
  }
 
  addNewJob = (job) => {
    console.log(job);
    // let addjob = this.state.arr;
    // addjop.push(job);
    this.setState({
      arr: [...this.state.arr, job]
      // arr: addjob
    })
  }

  deleteJob = (job) => {
    let deletejob = this.state.arr;
    deletejob = deletejob.filter(item => item.id != job.id);
    this.setState({
      arr: deletejob
    })
  }
  componentDidUpdate(props,state) {
    
  }
  componentDidMount() {
    
  }
  
  render() {
    // console.log(this.state);
    // const name = 'Hop';
    return (
      <>
        <AddComponent addNewJob={this.addNewJob}/>
        <ChidComponent
          arr={this.state.arr}
          deleteJob = {this.deleteJob}
        />
      </>
    )
  } 
}

export default Mycomponent;