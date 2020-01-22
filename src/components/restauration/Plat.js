import React from 'react';
import '../../asset/plat.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Plat extends React.Component {
    render() {
        return (
            <div id="platContainer">
                <div id="listeMenuTitle">
                     <button className="btn btn-primary" id="backBtn">
                     <Link to={{pathname:`/menus`, state:{referer:"/plat"}}}
                         style={{ color: "white", textDecoration: "none" }}
                    >
                        retour
                    </Link>
                     </button>
                     Menus
                </div>

                <div className="card" id="platBody">
                    <div className="card-header">titre</div>
                    <div className="card-body">
                        description """"""""""""""""""""""""""""<br />
                        prix 
                    </div>
                    <div className="card-footer" id="platAjout">
                       <div><button>+</button></div>
                       <div><button>-</button> </div>
                    </div>
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
