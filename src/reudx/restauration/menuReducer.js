import { FETCH_MENU_LIST_REQUEST, FETCH_MENU_LIST_SUCCESS, FETCH_MENU_LIST_FAILURE } from "../actionsType";


const InitialState = {
    loading: false,
    menus: [],
    error: ''
}

export const menuReducer = (state = InitialState, action) =>{
    switch (action.type) {
        case FETCH_MENU_LIST_REQUEST: return{
            ...state,
            loading: true,
            menus: [],
            error : ''
        }

        case FETCH_MENU_LIST_SUCCESS: return{
            ...state, 
            loading: false,
            menus: action.payload,
            error: ''
        }

        case FETCH_MENU_LIST_FAILURE: return{
            ...state,
            loading : false,
            menus : [],
            error : action.payload
        }
        default:return state;
    }
}