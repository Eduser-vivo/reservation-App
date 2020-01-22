import React from 'react';
import '../../asset/horaires.css';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import ReserveForm from './ReserveForm';
import { Link } from 'react-router-dom';

class Horaires extends React.Component {
    render() {
        return (
            <div id="horairesContainer">
                <div id="horairesTitle">
                    <button className="btn btn-primary" id="backBtn">
                        <Link to={{pathname:`/lignes`, state:{referer:"/horaires"}}}
                             style={{ color: "white", textDecoration: "none" }}
                            >
                            retour
                        </Link>
                    </button>
                       <small>Ligne 1</small> <br />
                        <small></small>
                </div>
                <div className="container" id="horairesBody">
                    <div className="card">
                        <div className="card-header" style={{textAlign:"center"}}> Horaires1 </div>
                        <div className="card-body">
                            <div className="card-text">
                               <small>heure depart : 14h30 </small><br/>
                               <small>heure arrive : 17h30 </small><br/>
                               <small>nombre de place : 30</small><br/>
                               <small>montant : 3000 fcfa </small><br/>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                                <Popup 
                                    trigger={<button className="btn btn-primary btn-larg">reserver</button>}
                                    modal
                                    closeOnDocumentClick
                                >
                                       <ReserveForm />
                                </Popup>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" style={{textAlign:"center"}}> Horaires1 </div>
                        <div className="card-body">
                            <div className="card-text">
                               <small>heure depart : 14h30 </small><br/>
                               <small>heure arrive : 17h30 </small><br/>
                               <small>nombre de place : 30</small><br/>
                               <small>montant : 3000 fcfa </small><br/>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                                <Popup 
                                    trigger={<button className="btn btn-primary btn-larg">reserver</button>}
                                    modal
                                    closeOnDocumentClick
                                >
                                       <ReserveForm />
                                </Popup>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" style={{textAlign:"center"}}> Horaires1 </div>
                        <div className="card-body">
                            <div className="card-text">
                               <small>heure depart : 14h30 </small><br/>
                               <small>heure arrive : 17h30 </small><br/>
                               <small>nombre de place : 30</small><br/>
                               <small>montant : 3000 fcfa </small><br/>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                                <Popup 
                                    trigger={<button className="btn btn-primary btn-larg">reserver</button>}
                                    modal
                                    closeOnDocumentClick
                                >
                                       <ReserveForm />
                                </Popup>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" style={{textAlign:"center"}}> Horaires1 </div>
                        <div className="card-body">
                            <div className="card-text">
                               <small>heure depart : 14h30 </small><br/>
                               <small>heure arrive : 17h30 </small><br/>
                               <small>nombre de place : 30</small><br/>
                               <small>montant : 3000 fcfa </small><br/>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                                <Popup 
                                    trigger={<button className="btn btn-primary btn-larg">reserver</button>}
                                    modal
                                    closeOnDocumentClick
                                >
                                       <ReserveForm />
                                </Popup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Horaires);
