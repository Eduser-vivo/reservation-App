import React from 'react';
import AuthService from '../auth/auth';
import { Redirect } from 'react-router';

class Service{

  setReservationStatus(status){
    window.localStorage.setItem("reservStatus", status);
  }

  getReservationStatus(){
    return JSON.parse(window.localStorage.getItem("reservStatus"));
  }
    
  setPanier(panier){
    window.localStorage.setItem("panier",  JSON.stringify(panier));
  }

  getPanier(){
    return JSON.parse(window.localStorage.getItem("panier"));
  }

  getAuthHeader(){

    if(AuthService.getTokensLocal() === null){
      return (<Redirect to={{ pathname: "/login", state: { referer: '' } }} />);
    }else{
      return { headers: { Authorization: 'Bearer ' + AuthService.getTokensLocal().token } };
    }

  }
}
export default new Service();