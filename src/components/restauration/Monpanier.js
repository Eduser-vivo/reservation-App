import React from 'react';
import { connect } from 'react-redux';

function Monpanier(props) {

  console.log(props.panier);
  const panier = props.panier;
  
  return (
    <div>
        {
          (panier.length === 0 || panier === null)?('aucun plat selectioné '):(
            panier.map(plat =>(
              <div className="card mb-3 mt-3 shadow-sm">
                  <div className="card-body">
                    <div className="card-title border-bottom">
                        <small>{plat.nom.substring(0, 30)} </small><br/>
                    </div>
                    <div className="card-text">
                        <small>prix: {plat.prix}</small>
                        <small></small><br/>
                        <small></small>
                    </div>
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
    panier : state.panier.panier
  }
}

export default connect(mapStateToProps)(Monpanier);