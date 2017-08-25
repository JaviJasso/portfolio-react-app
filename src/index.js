import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contacts from './components/Contacts';
import References from './components/References';



import BaseLayout from './components/BaseLayout';


import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  exact path="/About" component={About}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/Contacts" component={Contacts}/>
        <Route exact path="/References" component={References}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
