import service from "../../service/service";
import { AJOUT_PLAT, CREATION_RESERVATION_REQUEST, CREATION_RESERVATION_SUCCESS, CREATION_RESERVATION_FAILURE, CLEAR_OLD_RESERVATION_DATA, SET_RESERVATION_PLAT_STATUS, INSERT_PANIER_REQUEST, INSERT_PANIER_SUCCESS, INSERT_PANIER_FAILURE } from "../actionsType";


function checkpanier(){
   let pan = service.getPanier();
   if(pan === null || pan === "undefined"){
       return [];
   }else{
       return pan;
   }
}


const initialState = {
    panier : checkpanier()
}

export const panierReducer = (state =initialState, action)=>{
    switch (action.type) {
        case AJOUT_PLAT: return {
            ...state,
            panier : state.panier.concat(action.payload)
        }
        default:return state;
    }
}

const initialState2 = {
    loading : false,
    data: [],
    error : '',
    isReserv: false
}

export const createReservReducer = (state = initialState2, action)=>{
    switch (action.type) {
        case CREATION_RESERVATION_REQUEST: return{
            ...state,
            loading : true,
            data:[],
            error: '',
            isReserv: false
        }

        case CREATION_RESERVATION_SUCCESS: return{
            ...state,
            loading: false,
            data: action.payload,
            error: '',
            isReserv: true,
        }

        case CREATION_RESERVATION_FAILURE: return{
            ...state,
            loading: false,
            data: [],
            error: action.payload,
            isReserv: false
        }

        case CLEAR_OLD_RESERVATION_DATA: return{
            ...state, 
            isReserv: false
        }
        default: return state;
    }
}


const initialState3 = {
    loading: false,
    data: [],
    error: '',
    isAdd :false
}

export const insertPanierReducer = (state = initialState3, action)=> {
    switch (action.type) {
        case INSERT_PANIER_REQUEST: return{
            ...state,
            loading: false,
            data: [],
            error: '',
            isAdd: false
        }

        case INSERT_PANIER_SUCCESS: return{
            ...state,
            loading: false,
            data: action.payload,
            error: '',
            isAdd: true
        }

        case INSERT_PANIER_FAILURE: return{
            ...state,
            loading: false,
            data: [],
            error: action.payload,
            isAdd: false
        }

        case SET_RESERVATION_PLAT_STATUS: return{
            ...state,
            loading: false,
            data: [],
            error:'',
            isAdd: false
        }


        default:return state;
    }
}