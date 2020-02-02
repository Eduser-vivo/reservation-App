import React from 'react';
import '../../asset/horaires.css';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import ReserveForm from './ReserveForm';
import { Link, Redirect } from 'react-router-dom';

class Horaires extends React.Component {
    render() {
            
        const check = this.props.location.state;
        if(check === null || check === undefined || check.length === 0){
            return <Redirect to={{pathname:`/lignes`}} />
        }


        const horaires = this.props.location.state.LigneHoraires;
        const ligne = this.props.location.state.ligne;
        const ligneNom = this.props.location.state.ligneNom;
        console.log(horaires);

        
        return (
            <div id="horairesContainer">
                <div id="horairesTitle">
                        <Link to={{pathname:`/lignes`, state:{referer:"/horaires"}}}
                             style={{ color: "white", textDecoration: "none" }}
                             className="btn btn-primary" id="backBtn"
                            >
                             <i className="fas fa-long-arrow-alt-left"> </i> retour
                        </Link>
                       <small>Ligne {ligne+1} </small> <br />
                </div>
                <div className="container" id="horairesBody">
                    {
                        (horaires.length === 0 || horaires === null)?("aucun horaire disponible "):(

                        horaires.map((horaire, index) =>(
                            <div className="card" key={horaire.id}>
                            <div className="card-header">
                                <u>Horraire {index+1}:</u> {horaire.nom.substring(0, 30 )}
                            </div>
                            <div className="card-body"> 
                                <div className="ccard-text">
                                    <small>heure depart:  {horaire.heureDepart.substring(11, 19)} </small> <br />
                                    <small>heure arrive: {horaire.heureArrivee.substring(11, 19)} </small> <br />
                                    <small>nombre place: {horaire.nombrePlaces} </small> <br />
                                    <small>montant : {horaire.montant} fcfa</small>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <Popup 
                                    trigger={<button className="btn btn-primary btn-larg">reserver</button>}
                                    modal
                                    closeOnDocumentClick
                                >
                                       <ReserveForm horaire ={horaire} ligne={ligne} ligneNom ={ligneNom} />
                                </Popup>
                            </div>
                        </div> 
                        ))   
                        )
                    }

                   
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        horaires : state.horaires
    }
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Horaires);
