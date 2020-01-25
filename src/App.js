import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from './components/Home';
import Lignes from './components/bus/Lignes';
import Horaires from './components/bus/Horaires';
import { Switch, Route } from 'react-router';
import ListeMenu from './components/restauration/ListeMenu';
import Plat from './components/restauration/Plat';
import Login from './components/log/Login';
import ReserveForm from './components/bus/ReserveForm';
import {fetchBusLignes} from './reudx/bus/busAction';
import {fetchMenuList} from './reudx/restauration/menuAction'
import Logout from './components/log/Logout';
import {fetchLoginSuccess, fetchLoginFailure} from './reudx/log/logAction';
import AuthService from './auth/auth';



function mapStateToProps(state) {
  return {

  };
}

const mapDispatchToProps = {
  fetchBusLignes,
  fetchMenuList,
  fetchLoginSuccess,
  fetchLoginFailure
}

class App extends Component {

  UNSAFE_componentWillMount(){
    this.props.fetchMenuList();
    this.props.fetchBusLignes();

  }


  

  render() {
    return (
      <div id="appContent">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/lignes" component={Lignes} exact />
          <Route path="/horaires/:id" component={Horaires} exact />
          <Route path="/menus" component={ListeMenu} exact />
          <Route path="/connexion" component={Login} />
          <Route path="/deconnexion" component={Logout} />
          <Route path="/plat" component={Plat} exact />
          <Route path="/reservation" component={ReserveForm} exact />
        </Switch>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);