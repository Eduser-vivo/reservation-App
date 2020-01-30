import React from 'react';
import '../../asset/plat.css';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import service from '../../service/service';
import { creationReservation, cleanOldReservData, addToPanier } from '../../reudx/restauration/panierAction';

class Plat extends React.Component {
    constructor(props){
        super(props);
        this.state={
            panier : []
        }
    }

    UNSAFE_componentWillMount(){
       
    }

    addPanier(plat, id){        
        this.props.addToPanier(plat, id);
    }

    reserver(addItems){
        const idClient = this.props.client.data;
        this.props.reservation(idClient, addItems);
    }

    render() {
        const addItems = this.props.cardReducer.addedItems
        const shoppings = this.props.cardReducer.shoppings

        console.log(addItems);
        console.log(shoppings);
        
        const check = this.props.location.state;
        const plats = this.props.location.state.plats;
        

        if(check === null || check === undefined || check.length === 0){
            return <Redirect to={{pathname:`/menus`}} />
        }
        if(plats === null || plats === undefined || plats.length === 0){
            return <Redirect to={{pathname:`/menus`}} />
        }
        const menu = this.props.location.state.menu;
        const reserOk = this.props.creatReserv.isReserv;

        console.log(reserOk);
        if(reserOk){
            return <Redirect to={{pathname:`historiqueplats`}} />
        }

        return (
            <div id="platContainer">
                <div id="listeMenuTitle" className="nav-wrapper">
                    <div>
                        <Link to={{pathname:`/menus`, state:{referer:"/plat"}}}
                            style={{ color: "white", textDecoration: "none" }}
                            className="btn btn-primary" id="backBtn"
                        >
                            <i className="fas fa-long-arrow-alt-left"> </i> retour
                        </Link>
                        <small>Plat {menu+1} </small> <br />
                    </div>
                    <div>
                       <Link to={{pathname:`monpanier`, state:{ referer: "/plat"}}}
                             style={{ color: "white", textDecoration: "none" }}
                            >
                           { (addItems !== null)&&
                           <small>{addItems.length}</small>
                           }
                          <i className="fa fa-cart-plus" aria-hidden="true"></i>
                       </Link>
                    </div>
                </div>

                <div className="container" id="platBody">
                    {
                        (plats.length === 0 || plats === null)?("aucun plat disponible"):(
                          
                            plats.map((plat, index) =>(
                                <div className="card" id="platBody" key={plat.id}>
                                    <div className="card-body">
                                        <div className="card-title border-bottom ">
                                            <small><u>Plat {index+1}:</u> {plat.nom.substring(0, 30)}</small>
                                        </div>
                                        <div>
                                            <small> description : {plat.description.substring(0, 30)}</small> <br />
                                            <small> prix: {plat.prix} fcfa </small>
                                        </div>
                                    </div>
                                    <div className="card-footer" id="platAjout">
                                        <div><button className="btn btn-outline-primary btn-sm" onClick={()=> this.addPanier(plats, plat['@id'])} >ajouter+</button></div>
                                    </div>
                                </div>
                     ))
                        )
                    }
                    {
                        (addItems.length !== 0 ) &&
                        <button className="btn btn-success" id="acheterBtn" onClick={()=>this.reserver(addItems)} > 
                          <i className="far fa-check-circle fa-1x"></i>
                          reserver
                        </button>
                    }
                </div>

             </div>
        );
    }
}


const mapStateToProps = (state) => ({
  client : state.client,
  creatReserv : state.createreservation,
  cardReducer : state.cardReducer
});

const mapDispatchToProps = (dispatch) => ({
  reservation : (z, x)=> dispatch(creationReservation(z, x)),
  addToPanier : (plat, id) => dispatch(addToPanier(plat,id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Plat);
