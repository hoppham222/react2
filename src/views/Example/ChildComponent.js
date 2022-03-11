import React from "react";

class ChidComponent extends React.Component {

  state = {
  }
  
  
  render() {
    console.log(this.props);
    // const name = 'Hop';
    // let name = this.props.name;
    let { name, age, arr } = this.props;
    return (
      <>
        <div className="job-lists">
          {
            arr.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.salary}
                </div>
              )
            })
          }
        </div>
      </>
    )
  } 
}

export default ChidComponent;