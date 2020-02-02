import React, { Fragment } from 'react';
import '../../asset/login.css';
import { connect } from 'react-redux';
import {renderField} from '../../reudx/renderForm';
import { reduxForm, Field } from 'redux-form';
import {fetchLogin, fetchClient} from '../../reudx/log/logAction';
import { Link, Redirect } from 'react-router-dom';
import JwtDecode from 'jwt-decode';

const Login = (props) => {


    const check = props.location.state;
    if(check === null || check === undefined || check.length === 0){
        return <Redirect to={{pathname:`/`}} />
    }

    console.log(props.logInfo.error);

    const message = props.location.state.status && props.location.state.status;
    console.log(message);
    

   const onSubmit=(values)=>{
       const formData = {
           username : values.username,
           password : values.password
        }
        props.fetchLogin(formData);     
    }

   
    const isLog = props.logInfo.isLog;
    const loading = props.logInfo.loading;
    const token = props.logInfo.data.token;
    const referer = props.location.state.referer;
    const handleSubmit = props.handleSubmit;
    const error = props.logInfo.error

    if(isLog){
        console.log('is log'); 
        const userInfo = JwtDecode(token);
       const username = userInfo.username;
        props.fetchClient(username);
        
        return <Redirect to={{pathname:`${referer}`}} />
    }else{
        console.log();
        
    }


    return (
        <Fragment>
             <div id="ConnexionNavBar">
                        <Link to={{pathname:`/`, state:{referer: referer}}}
                             style={{ color: "white", textDecoration: "none" }}
                             className="btn btn-primary" id="backBtn"
                            >
                            <i className="fas fa-long-arrow-alt-left"> </i> retour
                        </Link>
             </div>
            <div className="container" id="formLogin">
                            {
                                (message === 401)&&(
                                    <div id="alert-login">
                                        <span className="alert alert-warning float-center" role="alert" > temps de connexion expiré, veuillez vous reconnecter</span>
                                    </div>
                                )
                            }
                           { (error === 401 || error === 400)&& (
                               <div id="alert-login">
                                   <span className="alert alert-danger float-center" role="alert" > identifiant ou mot de passe incorrect</span>
                               </div>
                            )
                           }
                <div className="container" id="formContainer">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <legend id="legendLogin">
                               { loading && <i className="fas fa-spinner fa-spin" ></i>}
                                connexion</legend>
                            <Field name="username" label="Nom d'utilisateur" type="text" placeholder="nom d'utilisateur" component={renderField} />
                            <Field name="password" label="Mot de passe" type="password" placeholder="mot de passe" component={renderField} />
                            <button className="btn btn-primary btn-block" type="submit">connexion</button>
                        </form>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
  logInfo : state.login
});

const mapDispatchToProps = {
    fetchLogin,
    fetchClient
};

export default reduxForm({
    form: 'Login'
})(connect(mapStateToProps, mapDispatchToProps)(Login));
