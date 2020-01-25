import React, { Component } from 'react';
import '../../asset/lignes.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchBusLignes} from '../../reudx/bus/busAction';


class Lignes extends Component {

  UNSAFE_componentWillMount(){
    const lignes = this.props.lignes.data;
    if(lignes.length === 0 || lignes === null){
      this.props.fetchBusLignes();
    }
  }
  
  render() {
    const lignes = this.props.lignes.data;
    const loading = this.props.lignes.loading;
    console.log(lignes);
    return (
      <div id="lignesContainer">
        <div id="lignesTitle">
              <Link to={{pathname:`/`, state:{referer:"/lignes"}}}
                    style={{ color: "white", textDecoration: "none" }}
                    className="btn btn-primary" id="backBtn"
                  >
                 <i className="fas fa-long-arrow-alt-left"></i> retour
              </Link>
             Lignes
        </div>
        
        <div className="container" id="ligneBody">

        {
          loading ?(
            <i className="fa fas-spinner fa-spin"></i> 
          ) :(
            (lignes.length === 0 || lignes === null)?("aucune ligne active"):(

              lignes.map((ligne, index) =>(
                <div className="card" key={ligne.id}>
                  <div className="card-header">
                    <u>Ligne<u></u></u> : {index+1} {ligne.nom.substring(0, 50)}
                  </div>
                  <div className="card-body"> 
                      <div className="ccard-text">
                        <small>distance: {ligne.distance} km </small> <br />
                        <small>point depart: {ligne.pointDepart.substring(0, 50)} </small> <br />
                        <small>point arrive: {ligne.pointArrivee.substring(0, 50)}  </small> <br />
                        <small> {ligne.montant} </small>
                      </div>
                  </div>
                  <div className="card-footer">
                    <Link to={{pathname:`/horaires/${index+1}`, state:{ligne: index, ligneNom: ligne.nom, LigneHoraires:ligne.horaires, referer: "/lignes"}}}
                        style={{ color: "white", textDecoration: "none" }}
                        className="btn btn-primary btn-sm btn-block"
                    >
                      Les horaires disponibles
                    </Link>
                  </div>
              </div> 
              )))  
          )
        }    
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    lignes: state.lignes
  };
}


const mapDispatchToProps = {
  fetchBusLignes,
}


export default connect(mapStateToProps, mapDispatchToProps)(Lignes);