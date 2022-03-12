import React from "react";

class AddComponent extends React.Component{

  state = {
    title: '',
    salary: '',
  }

  hendleChangetitle = (event) => {
    this.setState({
      title: event.target.value
    })

  }
  hendleChangesalary = (event) => {
    this.setState({
      salary: event.target.value
    })
  }
  hendleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    if (!this.state.title || !this.state.salary) {
      alert('Không để trống dữ liệu')
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random()*1000),
      title: this.state.title,
      salary: this.state.salary
    });
    this.setState({
      title: '',
      salary:''
    })
  }
    render() {
        return (
            <>
              <form>
                <label htmlFor="fname">Title</label><br />
                  <input type="text" id="fname" name="fname" value={this.state.title}
                  onChange={(event)=> this.hendleChangetitle(event)}
                  /><br />
                <label htmlFor="lname">Salary</label><br />
                  <input type="text" id="lname" name="lname" value={this.state.salary}
                  onChange={(event)=> this.hendleChangesalary(event)}
                  /><br />
                  <input type="submit" value="submit"
                  onClick={(event)=> this.hendleSubmit(event)}
                  />
              </form>
            </>
        )
    }

}

export default AddComponent;