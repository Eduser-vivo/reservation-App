import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from './components/Home';
import Lignes from './components/bus/Lignes';
import Horaires from './components/bus/Horaires';
import { Switch, Route } from 'react-router';



function mapStateToProps(state) {
  return {

  };
}

class App extends Component {
  render() {
    return (
      <div id="appContent">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/lignes" component={Lignes} exact />
          <Route path="/horaires" component={Horaires} exact />
        </Switch>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(App);