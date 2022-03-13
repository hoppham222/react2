import React from "react";
import Addtodo from "./Addtodo";
import './Listtodo.scss';
import { toast } from 'react-toastify';

class Listtodo extends React.Component {
  state = {
    listodo: [
      { id:'1', title:'hhhhh'},
      { id:'2', title:'2jjaksd' },
      { id: '3', title:'213131asdad' }
      
    ],
    edittodo: {}

  }

  addnewtodo = (todo) => {
    this.setState({
      listodo: [ ...this.state.listodo, todo]
    })

    toast.success("Thêm thành công")
  }

  handelrOnChange = (event) => {
    let edittodoCopy = { ...this.state.edittodo };
    edittodoCopy.title = event.target.value;
    this.setState({
      edittodo: edittodoCopy
    })
  }

  edittodo = (todo) => {
    let { edittodo, listodo } = this.state;
    let isEmptyObj = Object.keys(edittodo).length === 0;
    if (isEmptyObj === false && edittodo.id === todo.id) {
      let listtodoCopy = [...listodo];
      let objIndex = listtodoCopy.findIndex((item => item.id === todo.id));
      if (!edittodo.title) { 
        toast.error('Dũ liệu không được để trống');
        return;
      }
      listtodoCopy[objIndex].title = edittodo.title;
      this.setState({
        listodo: listtodoCopy,
        edittodo: {}
      })
      toast.success('Sửa thành công');

      return;
    }
    this.setState({
      edittodo: todo
    })
    
  }

  deletetodo = (todo) => {
    let currenttodo = this.state.listodo;
    currenttodo = currenttodo.filter(item => item.id !== todo.id);
    this.setState({
      listodo: currenttodo
    })
    toast.success("xóa thành công")
  }
 
  render() {
    let { listodo, edittodo } = this.state;
    let isEmptyObj = Object.keys(edittodo).length === 0;
    return (
      <><p>
        Bắt đầu một loại mới 1
        </p>
        
        <div className="list-todo">
          <Addtodo addnewtodo={this.addnewtodo} />
          <div className="list-todo-body">
            { listodo && listodo.length > 0 &&
              listodo.map((item, index) => {
                return (
                  <div key={item.id} className="todo-child-item">
                    {isEmptyObj === true ?
                      <span>{index + 1} - {item.title}</span>
                      :
                      <>
                        {edittodo.id === item.id ?
                          <span>{index + 1} - <input value={edittodo.title}
                          onChange={(event) => this.handelrOnChange(event)}
                          /> </span>
                          :
                          <span>{index + 1} - {item.title}</span>
                        }
                      </>
                    }
                    
                    <button className="edit"
                      onClick={() => this.edittodo(item)}
                    >{isEmptyObj === false && edittodo.id === item.id ?
                      'Lưu' : 'Edit'
                    }</button>
                     
                    <button className="delete" onClick={() => this.deletetodo(item)}>Delete</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
 
      )
  }
}

export default Listtodo;