import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/App.css"



export default class BaseLayout extends Component {
  render(){
  return (
    <div>
      <nav>
        <div>
          <ul className="navbar">
            <li>
              <NavLink activeClassName='selected' to="/">Home Alone</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to="/About">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to="/Portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to="/Contacts">Contacts</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to="/References">References</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {this.props.children}
    </div>
  )
}
}
