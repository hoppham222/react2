import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../Hoc/Color";

class Home extends React.Component{
  render() {
    // function Home(){
    // const navigate = useNavigate();
    // setTimeout(() => {
    //   navigate("/todo");
    // }, 3000)

    return (
      <>
        <div>
          Chào bạn
        </div>
      </>
    )
  }
  
}

export default Color(Home);