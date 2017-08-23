import React, {Component} from 'react';
import {Switch, Route } from  'react-router-dom'

import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';

class Main extends Component {
  render(){
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/Contact" component={About}/>
        <Route  path="/Portfolio" component={Portfolio}/>
      </Switch>
    </div>
  )
}
}

export default Main
