import React, { Component } from 'react';
import '../asset/home.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default class Home extends Component {
  render() {
    return (
      <div id="homeConteneur">

          <div className="container-fluid" id="homeHeader">
            <div id="homeNavBar">
              <NavBar />
            </div>
            <div id="homeHeaderMsg">
                <h3>Bienvenue</h3>
                <span>Veuillez cliquer sur Bus pour accéder aux lignes disponible</span>
                <span> et sur Reservation pour accéder aux menu du jours et choisir un plat</span>
            </div>
          </div>

          <div className="container" id="homeBody">

            <div className="row" id="homeCardContainer">
                <div className="col-6">
              <Link to={{pathname:`/lignes`, state:{referer:'/'}}}>
                    <div className="card" id="cardH" >
                        <div className="card-body">
                            <i className="fas fa-bus fa-5x" ></i>
                        </div>
                    </div>
              </Link>
                </div>
                <div className="col-6">
                  <Link to={{pathname:`/menus`, state:{referer:'/'}}}>
                      <div className="card" id="cardH" >
                          <div className="card-body">
                              <div><i className="fas fa-utensils fa-5x" /> </div>
                          </div>
                      </div>
                  </Link>
                </div>
            </div>
            
          </div>
      </div>
    );
  }
}
