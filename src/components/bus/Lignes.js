import React, { Component } from 'react';
import '../../asset/lignes.css';
import { Link } from 'react-router-dom';

class Lignes extends Component {
  render() {
    return (
      <div id="lignesContainer">
        <div id="lignesTitle">
          <button className="btn btn-primary" id="backBtn">
              <Link to={{pathname:`/`, state:{referer:"/lignes"}}}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                  retour
              </Link>
          </button> 
             Lignes
        </div>
        
        <div className="container" id="ligneBody">

          <div className="card">
              <div className="card-header" >
                ligne1 lome-karasdzfefe"fe"fefefef"
              </div>
              <div className="card-body"> 
                  <div className="ccard-text">
                    <small>distance:200km </small> <br />
                    <small>prix:3000</small>
                  </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm btn-block"> 
                <Link to={{pathname:`/horaires`, state:{ligne: 1, referer: "/lignes"}}}
                    style={{ color: "white", textDecoration: "none" }}
                >
                  Les horaires disponibles
                </Link>
                </button>
              </div>
          </div>
          <div className="card">
              <div className="card-header" >
                ligne1 lome-karasdzfefe"fe"fefefef"
              </div>
              <div className="card-body"> 
                  <div className="ccard-text">
                    <small>distance:200km </small> <br />
                    <small>prix:3000</small>
                  </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm btn-block"> 
                <Link to={{pathname:`/horaires`, state:{ligne: 1, referer: "/lignes"}}}
                    style={{ color: "white", textDecoration: "none" }}
                >
                  Les horaires disponibles
                </Link>
                </button>
              </div>
          </div>
          <div className="card">
              <div className="card-header" >
                ligne1 lome-karasdzfefe"fe"fefefef"
              </div>
              <div className="card-body"> 
                  <div className="ccard-text">
                    <small>distance:200km </small> <br />
                    <small>prix:3000</small>
                  </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm btn-block"> 
                <Link to={{pathname:`/horaires`, state:{ligne: 1, referer: "/lignes"}}}
                    style={{ color: "white", textDecoration: "none" }}
                >
                  Les horaires disponibles
                </Link>
                </button>
              </div>
          </div>
          <div className="card">
              <div className="card-header" >
                ligne1 lome-karasdzfefe"fe"fefefef"
              </div>
              <div className="card-body"> 
                  <div className="ccard-text">
                    <small>distance:200km </small> <br />
                    <small>prix:3000</small>
                  </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm btn-block"> 
                <Link to={{pathname:`/horaires`, state:{ligne: 1, referer: "/lignes"}}}
                    style={{ color: "white", textDecoration: "none" }}
                >
                  Les horaires disponibles
                </Link>
                </button>
              </div>
          </div>
          <div className="card">
              <div className="card-header" >
                ligne1 lome-karasdzfefe"fe"fefefef"
              </div>
              <div className="card-body"> 
                  <div className="ccard-text">
                    <small>distance:200km </small> <br />
                    <small>prix:3000</small>
                  </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm btn-block"> 
                <Link to={{pathname:`/horaires`, state:{ligne: 1, referer: "/lignes"}}}
                    style={{ color: "white", textDecoration: "none" }}
                >
                  Les horaires disponibles
                </Link>
                </button>
              </div>
          </div>
          <div className="card">
              <div className="card-header" >
                ligne1 lome-karasdzfefe"fe"fefefef"
              </div>
              <div className="card-body"> 
                  <div className="ccard-text">
                    <small>distance:200km </small> <br />
                    <small>prix:3000</small>
                  </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm btn-block"> 
                <Link to={{pathname:`/horaires`, state:{ligne: 1, referer: "/lignes"}}}
                    style={{ color: "white", textDecoration: "none" }}
                >
                  Les horaires disponibles
                </Link>
                </button>
              </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Lignes;