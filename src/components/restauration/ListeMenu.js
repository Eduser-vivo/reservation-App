import React from 'react';
import '../../asset/listemenu.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListeMenu extends React.Component {
    render() {
        return (
            <div id="listeMenuContainer">
                <div id="listeMenuTitle">
                     <button className="btn btn-primary" id="backBtn">
                     <Link to={{pathname:`/`, state:{referer:"/menus"}}}
                         style={{ color: "white", textDecoration: "none" }}
                    >
                        retour
                    </Link>
                     </button>
                     Menus
                </div>

                <div className="container" id="menusBody">
                    <div className="card">
                        <div className="card-header" >
                            menu1 sdzfefe"fe"fefefef"
                        </div>
                        <div className="card-body"> 
                            <div className="ccard-text">
                                <small>ddescription ... ... ... </small>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary btn-sm btn-block"> 
                            <Link to={{pathname:`/plat`, state:{ligne: 1, referer: "/menus"}}}
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

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ListeMenu);
