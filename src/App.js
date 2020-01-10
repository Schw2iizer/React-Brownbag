import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './views/home/home';
import Events from './components/Events';
import Lifecycle from './components/Lifecycle';
import Mapping from './components/Mapping';

export default class App extends Component {

render() {

  return (
    <>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/react-events" component={Events}/>
        <Route exact path="/lifecycle-methods" component={Lifecycle}/>
        <Route exact path="/mapping" component={Mapping}/>
      </Switch>
    </Router>
    </>
  )
  }
}
