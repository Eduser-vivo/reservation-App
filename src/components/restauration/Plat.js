import React from 'react';
import '../../asset/plat.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';

class Plat extends React.Component {
    render() {

        const check = this.props.location.state;
        if(check === null || check === undefined || check.length === 0){
            return <Redirect to={{pathname:`/menus`}} />
        }

        const menu = this.props.location.state.menu;
        const plats = this.props.location.state.plats;

        console.log(plats);
        
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
                </div>

                <div className="container" id="platBody">
                    {
                        (plats.length === 0 || plats === null)?("aucun plat disponible"):(
                          
                            plats.map((plat, index) =>(

                                <div className="card" id="platBody" key={plat.id}>
                                    <div className="card-body">
                                        <div className="card-title border-bottom ">
                                            <small><u>Plat {index+1}:</u> {plat.nom.substring(0, 30)}</small>
                                            <small class="badge badge-dark" id="platCompte"> 0 </small>
                                        </div>
                                        <div>
                                            <small> description : {plat.description.substring(0, 30)}</small> <br />
                                            <small> prix: {plat.prix} fcfa </small>
                                        </div>
                                    </div>
                                    <div className="card-footer" id="platAjout">
                                        <div><button className="btn btn-primary btn-sm">ajouter+</button></div>
                                        <div><button className="btn btn-secondary btn-sm">retirer-</button> </div>
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


const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Plat);
