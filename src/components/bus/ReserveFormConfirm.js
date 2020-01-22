import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ReserveFormConfirm = () => {
    return (
        <div>
            nom : abalo
            prenom : koffi
            telephone : 12345
            <button className="btn btn-primary"> confimer</button>
            <button className="btn btn-danger"> annuler </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReserveFormConfirm);
