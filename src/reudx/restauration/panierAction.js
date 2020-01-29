import { 
    AJOUT_PLAT,
    INSERT_PANIER_REQUEST,
    INSERT_PANIER_SUCCESS,
    INSERT_PANIER_FAILURE,
    CREATION_RESERVATION_REQUEST,
    CREATION_RESERVATION_SUCCESS,
    CREATION_RESERVATION_FAILURE,
    CLEAR_OLD_RESERVATION_DATA,
    SET_RESERVATION_PLAT_STATUS,
 } from "../actionsType"
import { request } from "../request"


export const addPanier = (data) =>{
    return{
        type: AJOUT_PLAT,
        payload: data
    }
}


/**
 * CreationReservation
 */

 export const createReservationRequest = ()=>{
     return{
         type: CREATION_RESERVATION_REQUEST
     }
 }

 export const creationReservationSuccess = (data)=>{
     return{
         type: CREATION_RESERVATION_SUCCESS,
         payload : data
     }
 }


 export const creationReservationFailure = (error)=>{
     return{
         type: CREATION_RESERVATION_FAILURE,
         payload: error
     }
 }

 export const cleanOldReservData = ()=>{
    return{
        type: CLEAR_OLD_RESERVATION_DATA
    }
 }

 export const creationReservation = (idClient)=>{
     return (dispatch)=>{
         dispatch(createReservationRequest());
         return request.post(`/reservations`, 
         {
            client : `api/clients/${idClient}`
         }
         ).then(
             response => dispatch(creationReservationSuccess(response))
         ).catch(
             error => dispatch(creationReservationFailure(error))
         )
     } 
 }

/**
 * addReservationplat
 */

export const insertPanierRequest = () =>{
    return{
        type: INSERT_PANIER_REQUEST
    }
}
export const insertPanierSuccess = (data) =>{
    return{
        type: INSERT_PANIER_SUCCESS,
        payload : data
    }
}
export const insertPanierFailure = (error) =>{
    return{
        type: INSERT_PANIER_FAILURE,
        payload: error
    }
}


export const setReservationPlat = ()=>{
    return{
        type: SET_RESERVATION_PLAT_STATUS
    }
}


export const insertPanier = (panier, idReservation)=>{
    return (dispatch)=>{
        dispatch(insertPanierRequest());
            request.post(`/reservation_plats`, {

            })
    }
}

