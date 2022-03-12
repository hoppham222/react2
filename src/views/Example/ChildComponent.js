import React from "react";

class ChidComponent extends React.Component {

  state = {
    showjobs: false
  }

  hendleShowHide = () => {
    this.setState({
      showjobs: !this.state.showjobs
    })
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
            <button onClick={() => this.hendleShowHide()} >Show</button>
          </div>
        
        :
          <>
            <div className="job-lists">
            {
              arr.map((item, index) => {
                if (item.salary > 400) {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary} $
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