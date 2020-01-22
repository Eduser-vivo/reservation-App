import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../reudx/renderForm';

const RerserveForm = (props) => {

    
    const onSubmit =(values)=>{
        console.log(values);
    }

    const handleSubmit = props.handleSubmit;

    

    return (
        <div >
            <h5>Reservation</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field name="nom" label="Nom" type="text" placeholder="votre nom" component={renderField} />
                <Field name="prenom" label="Prenom" type="text" placeholder="votre prenom" component={renderField} />
                <Field name="numero" label="Telephone" type="text" placeholder="votre telephone" component={renderField} />
                <button className="btn btn-primary" type="submit" > enregistrer </button><br/><br/>
            </form>
        </div>
    );
};

RerserveForm.propTypes = {};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) =>({
  
});

export default reduxForm({
    form: 'ReserveForm'
})(connect(mapStateToProps, mapDispatchToProps)(RerserveForm));
