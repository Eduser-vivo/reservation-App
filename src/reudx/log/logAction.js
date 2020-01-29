import { 
    FETCH_LOGIN_REQUEST, 
    FETCH_LOGIN_SUCCESS, 
    FETCH_LOGIN_FAILURE, 
    LOG_OUT,
    FETCH_CLIENT_REQUEST,
    FETCH_CLIENT_SUCCESS,
    FETCH_CLIENT_FAILURE } from "../actionsType"
import {request} from '../request';
import AuthService from '../../auth/auth'


export  const fetchLoginRequest = () =>{
    return{
        type: FETCH_LOGIN_REQUEST
    }
}

export  const fetchLoginSuccess = (data) =>{
    AuthService.setTokensLocal(data);
    AuthService.setLog(true);
    return{
        type: FETCH_LOGIN_SUCCESS,
        payload : data
    }
}

export  const fetchLoginFailure = (error) =>{
    AuthService.setLog(false);
    return{
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}

export  const fetchLogin = (formData) =>{
  return (dispatch) =>{
      dispatch(fetchLoginRequest());
      return request.post(`/login_check`, formData).then(
          response => dispatch(fetchLoginSuccess(response))
      ).catch(error => dispatch(fetchLoginFailure(error)))
  }
}


/**
 * get utilisatuer
 */

 export const fetchClientRequest =()=>{
     return{
         type: FETCH_CLIENT_REQUEST
     }
 }

 export const fetchClientSuccess =(client)=>{
     AuthService.setClient(client["hydra:member"][0].client.id);
     return{
         type: FETCH_CLIENT_SUCCESS,
         payload: client["hydra:member"][0].client.id
     }
 }

 export const fetchClientFailure =(error)=>{
     return{
        type: FETCH_CLIENT_FAILURE,
        payload: error

     }
 }


 export const fetchClient = (username)=>{
    return (dispatch)=>{
        dispatch(fetchClientRequest());
        return request.get(`/users?username=${username}`).then(
            response => dispatch(fetchClientSuccess(response))
        ).catch(
            error => dispatch(fetchClientFailure(error))
        )
    }
 }


/**
 * logout
 */
export const fetchlogout = ()=>{
    return{
        type: LOG_OUT
    }
}


