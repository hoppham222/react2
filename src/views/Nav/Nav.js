import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss';
import { NavLink } from "react-router-dom";

class Nav extends React.Component{
    render() {
        return (
            <>
              <div className="topnav">
                <NavLink  to="/">Test1</NavLink>
                <NavLink to="/todo" >Test2</NavLink>
                <NavLink to="/about" >Test3</NavLink>
                <NavLink to="/user" >User</NavLink>
              </div>
            </>
      )
  }
}

export default Nav;