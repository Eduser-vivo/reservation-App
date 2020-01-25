import { FETCH_MENU_LIST_REQUEST, FETCH_MENU_LIST_SUCCESS, FETCH_MENU_LIST_FAILURE } from "../actionsType"
import { request } from "../request"


export const fetchMenuListRequest = () =>{
    return{
        type: FETCH_MENU_LIST_REQUEST
    }
}

export const fetchMenuListSuccess = (data) =>{
    return{
        type: FETCH_MENU_LIST_SUCCESS,
        payload : data["hydra:member"]
    }
}

export const fetchMenuListFailure = (error) =>{
    return{
        type: FETCH_MENU_LIST_FAILURE,
        payload: error
    }
}


export const fetchMenuList = () =>{
    return dispatch =>{
        dispatch(fetchMenuListRequest());
        return request.get(`/menus`).then(
            response => dispatch(fetchMenuListSuccess(response))
        ).catch(
            error => dispatch(fetchMenuListFailure(error))
        );
    }
}