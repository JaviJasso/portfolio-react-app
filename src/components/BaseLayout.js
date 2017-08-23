import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class BaseLayout extends Component {
  render(){
  return (
    <div>
      <nav>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">Home Alone</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
      {this.props.children}
    </div>
  )
}
}
