import React from 'react';
import '../../asset/plat.css';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import service from '../../service/service';
import { addPanier, insertPanier, creationReservation, cleanOldReservData, setReservationPlat } from '../../reudx/restauration/panierAction';

class Plat extends React.Component {
    constructor(props){
        super(props);
        this.state={
            panier : this.props.panier,
        }
    }

    UNSAFE_componentWillMount(){
        const panier = this.state.panier;
        if(panier === null || panier === "undefined"){
            this.setState({panier : []});
            service.setPanier([])
        }
    }


    componentDidUpdate(prevProps){
        const panier = this.state.panier;
        const oldPanier = prevProps.panier;
    
        if(oldPanier !== panier){
            service.setPanier(this.state.panier);
        } 
    }

    addPanier(newPanier){
        
        this.setState({panier : this.state.panier.concat(newPanier) });
        this.props.addPanier(newPanier);
    }

    reserver(paniers){
        const idClient = this.props.client.data;
        this.props.reservation(idClient);
        console.log(idClient);    
    }

    render() {

        const panier = this.state.panier
        console.log(this.state);
        console.log(this.props);
        
        const check = this.props.location.state;
        if(check === null || check === undefined || check.length === 0){
            return <Redirect to={{pathname:`/menus`}} />
        }

        const menu = this.props.location.state.menu;
        const plats = this.props.location.state.plats;
        const reserOk = this.props.creatReserv.isReserv;
        const idReserv = this.props.creatReserv.data.id;
        const insertStatus = this.props.insertPanier.isAdd;

        console.log(reserOk);
        console.log(idReserv);
        console.log(insertStatus);
        
        

        if(reserOk){
            this.props.addReservation(panier);
            this.props.cleanOldReserv();
        }

        if(insertStatus){
            this.props.inserPanierStatus();
        }

        return (
            <div id="platContainer">
                <div id="listeMenuTitle">
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
                           { (this.state.panier !== null)&&
                           <small>{this.state.panier.length}</small>
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
                                        <div><button className="btn btn-outline-primary btn-sm" onClick={()=> this.addPanier(plat)} >ajouter+</button></div>
                                        {/* <div><button className="btn btn-outline-secondary btn-sm">retirer-</button> </div> */}
                                    </div>
                                </div>
                     ))
                        )
                    }
                    {
                        (panier.length !== 0 ) &&
                        <button className="btn btn-success" id="acheterBtn" onClick={()=>this.reserver(panier)} > 
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
  panier: state.panier.panier,
  client : state.client,
  creatReserv : state.createreservation,
  insertPanier : state.insertPanier
});

const mapDispatchToProps = (dispatch) => ({
  addPanier : (x)=>dispatch(addPanier(x)),
  addReservation : (y)=> dispatch(insertPanier(y)),
  reservation : (z)=> dispatch(creationReservation(z)),
  cleanOldReserv : () => dispatch(cleanOldReservData()),
  inserPanierStatus: ()=> dispatch(setReservationPlat())
});

export default connect(mapStateToProps, mapDispatchToProps)(Plat);
