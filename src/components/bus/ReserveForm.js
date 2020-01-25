import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import {fetchBusReservation} from '../../reudx/bus/busAction';



const RerserveForm = (props) => {

    const horaire = props.horaire;
    const ligne = props.ligne;
    const ligneNom = props.ligneNom;
    const handleSubmit  = props.handleSubmit;


    const onSubmit=()=>{
        const idHoraie = horaire.id;
        const idClient = props.client.data;
        console.log(idClient);
        
        props.fetchBusReservation(idHoraie, idClient);
    }

    console.log(props.location);

    const isLog = props.logInfo.isLog;

    if(!isLog){
        return (<Redirect to={{ pathname: "/connexion", state: { referer: '/lignes' } }} />);
    }
    
    return (
        <div >
            <h5>Votre Reservation</h5>
            <div>
                <p>  Ligne {ligne+1}: {ligneNom} </p>
                <p>  horaire depart: {horaire.heureDepart.substring(11, 19)} </p>
                <p>  horaire arrive: {horaire.heureArrivee.substring(11, 19)} </p>
                <p>  montant : {horaire.montant} fcfa   </p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <button className="btn btn-primary" type="submit"> confirmer </button>
                </form>
            </div>
 
        </div>
    );
};

const mapStateToProps = (state) => ({
    logInfo: state.login,
    client : state.client
});

const mapDispatchToProps  ={
    fetchBusReservation,
};

export default reduxForm({
    form: 'RerserveForm'
})(connect(mapStateToProps, mapDispatchToProps)(RerserveForm));
