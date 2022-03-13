import React from "react";
import { toast } from 'react-toastify';

class Addtodo extends React.Component{
  state = {
      title:''
  }
  handleOnChengeTitle = (event) => {
    this.setState({
      title:event.target.value
    })
  }

  henderOnClick = () => {
    if (!this.state.title) {
      toast.error('Dũ liệu không được để trống');
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title
    }

    this.props.addnewtodo(todo);
    this.setState({
      title:''
    })
  }
  render() {
    let { title } = this.state;
      return (
      <div className="add-todo">
          <input type="text" value={title}
          onChange={(event) => this.handleOnChengeTitle(event)}
          />
          <button type="button" className="add"
          onClick={() => this.henderOnClick()}
          >Add</button>
      </div>
    )
  }
}

export default Addtodo;