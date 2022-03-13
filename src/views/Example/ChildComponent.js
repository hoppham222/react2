import React from "react";
import './csschild.scss';

class ChidComponent extends React.Component {

  state = {
    showjobs: false
  }

  hendleShowHide = () => {
    this.setState({
      showjobs: !this.state.showjobs
    })
  }

  hendleDelete = (job) => {
    this.props.deleteJob(job)
  }
  
  render() {
    // console.log(this.props);
    // const name = 'Hop';
    // let name = this.props.name;
    let { arr } = this.props;
    let { showjobs } = this.state;
    let check = showjobs === true ? 'showjobs = true' : 'showjobs = false';
    
    
    return (
      <>
        {showjobs === false ?
          <div className="show">
            <button className="btn-show" onClick={() => this.hendleShowHide()} >Show</button>
          </div>
        
        :
          <>
            <div className="job-lists">
            {
              arr.map((item, index) => {
                if (item.salary > 400) {
                  return (
                    <div key={item.id}>
                      {item.id} - {item.title} - {item.salary} $ $nbsp <span onClick={() => this.hendleDelete(item)}>x</span>
                    </div>
                  )
                }
              })
            }
            </div>
            <div className="hide">
              <button onClick={() => this.hendleShowHide()} >Hide</button>
            </div>
          </>
        }
      </>
    )
  }
}

// const ChidComponent = (props) => {
//   let { arr } = props;
//   return (<>
//     <div className="job-lists">
//            {
//             arr.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                  {item.title} - {item.salary}
//                 </div>
//                )
//             })
//           }
//     </div>
//   </>)
// }

export default ChidComponent;