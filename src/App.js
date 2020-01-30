import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from './components/Home';
import Lignes from './components/bus/Lignes';
import Horaires from './components/bus/Horaires';
import { Switch, Route, Redirect } from 'react-router';
import ListeMenu from './components/restauration/ListeMenu';
import Plat from './components/restauration/Plat';
import Login from './components/log/Login';
import ReserveForm from './components/bus/ReserveForm';
import {fetchBusLignes} from './reudx/bus/busAction';
import {fetchMenuList} from './reudx/restauration/menuAction'
import Logout from './components/log/Logout';
import {fetchLoginSuccess, fetchLoginFailure} from './reudx/log/logAction';
import HistoriqueBus from './components/bus/HistoriqueBus';
import Monpanier from './components/restauration/Monpanier';
import { HistoriquePlat } from './components/restauration/HistoriquePlat';



function mapStateToProps(state) {
  return {
    Log : state.login
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
    const isLog = this.props.Log.isLog;
    if(!isLog){
      return <Redirect to={{pathname:`/connexion`, state:{referer :`/`} }} />
    }
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
          <Route path="/historiquebus" component={HistoriqueBus} exact />
          <Route path="/monpanier" component={Monpanier} exact />
          <Route path="/historiqueplats" component={HistoriquePlat} exact />
        </Switch>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);