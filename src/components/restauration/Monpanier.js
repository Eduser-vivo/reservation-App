import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { removeItem, addQuantity, subtractQuantity, creationReservation } from '../../reudx/restauration/panierAction';

function Monpanier(props) {

  const shoppings = props.cardReducer.shoppings;
  const addedItems = props.cardReducer.addedItems;

  console.log(shoppings);
  if(!shoppings){
    return<Redirect to={{pathname:`/plats`}}/>
  }

  const addQuantity =(id)=>{
    props.addQuantity(id);
  }

  const removeItem =(id) =>{
    props.removeItem(id);
  }

  const subtractQuantity=(id)=>{
      props.subtractQuantity(id);
  }

 const reserver =(addItems)=>{
    const idClient = props.client.data;
    props.reservation(idClient, addItems);
}


const reserOk = props.creatReserv.isReserv;
if(reserOk){
  return <Redirect to={{pathname:`historiqueplats`}} />
}
  
  return (
    <div>

        {
            (shoppings.length !== 0 ) &&
            <button className="btn btn-success" id="acheterBtn" onClick={()=>reserver(addedItems)} > 
              <i className="far fa-check-circle fa-1x"></i>
              reserver
            </button>
        }

        {
          (shoppings.length === 0 || shoppings === null)?('aucun plat selectioné '):(
            shoppings.map(plat =>(
              <div className="card mb-6 mt-6 shadow-sm" key={plat.plat.id}>
                  <div className="card-body">
                      <div className="card-title border-bottom">
                          <small>{plat.plat.nom.substring(0, 30)} </small><br/>
                          <small>quantite : {plat.quantite} </small><br/>
                      </div>
                      <div className="card-text">
                          <small>prix: {plat.plat.prix}</small>
                      </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-outline-primary btn-sm" onClick={()=>addQuantity(plat.plat['@id'])}>ajouter</button>
                    <button className="btn btn-outline-warning btn-sm" onClick={()=>subtractQuantity(plat.plat['@id'])} >diminuer</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={()=>removeItem(plat.plat['@id'])}><i className="fas fa-trash"></i></button>
                  </div>
              </div>
            ))
          )
        }
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    client : state.client,
    cardReducer : state.cardReducer,
    creatReserv : state.createreservation
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    removeItem : (id) => dispatch(removeItem(id)),
    addQuantity : (id) => dispatch(addQuantity(id)),
    subtractQuantity : (id) => dispatch(subtractQuantity(id)),
    reservation : (z, x)=> dispatch(creationReservation(z, x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monpanier);