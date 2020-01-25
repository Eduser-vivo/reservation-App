import { 
    FETCH_BUS_LIGNES_REQUEST, 
    FETCH_BUS_LIGNES_SUCCESS, 
    FETCH_BUS_LIGNES_FAILURE,
    FETCH_BUS_RESERVATION_REQUEST,
    FETCH_BUS_RESERVATION_SUCCESS,
    FETCH_BUS_RESERVATION_FAILURE, 
} from "../actionsType"
import { request } from "../request";

/**
 * Ligne bus
 */
export const fetchBusLigneRequest = () =>{
    return{
        type: FETCH_BUS_LIGNES_REQUEST,
    }
}
export const fetchBusLigneSuccess = (data) =>{
    return{
        type: FETCH_BUS_LIGNES_SUCCESS,
        payload: data["hydra:member"]
    }
}
export const fetchBusLignesFailure = (error) =>{
    return{
        type: FETCH_BUS_LIGNES_FAILURE,
        payload : error
    }
}

export const fetchBusLignes = () =>{
    return (dispatch)=>{
        dispatch(fetchBusLigneRequest());
        return request.get(`/ligne_buses`).then(
            response=> dispatch(fetchBusLigneSuccess(response))
        ).catch(error => dispatch(fetchBusLignesFailure(error)))
    }
}


/**
 * reservation bus 
 */
export const fetchBusReservationRequest = () =>{
    return{
        type: FETCH_BUS_RESERVATION_REQUEST,
    }
}
export const fetchBusReservationSuccess = (data) =>{
    return{
        type: FETCH_BUS_RESERVATION_SUCCESS,
        payload: data
    }
}
export const fetchBusReservationFailure = (error) =>{
    return{
        type: FETCH_BUS_RESERVATION_FAILURE,
        payload : error
    }
}

export const fetchBusReservation = (idHoraire, idClient) =>{
    return (dispatch)=>{
        dispatch(fetchBusReservationRequest());
        return request.post(`/reservation_buses`, 
            {
                horaire : `/horaires/${idHoraire}`,
                client : `/clients/${idClient}`
            }
        
        ).then(
            response=> dispatch(fetchBusReservationSuccess(response))
        ).catch(error => dispatch(fetchBusReservationFailure(error)))
    }
}





