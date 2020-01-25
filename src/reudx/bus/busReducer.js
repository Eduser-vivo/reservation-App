import {
     FETCH_BUS_LIGNES_REQUEST,
     FETCH_BUS_LIGNES_SUCCESS, 
     FETCH_BUS_LIGNES_FAILURE,
     FETCH_BUS_RESERVATION_REQUEST,
     FETCH_BUS_RESERVATION_SUCCESS,
     FETCH_BUS_RESERVATION_FAILURE, 
} from "../actionsType";


const initialState ={
    loading: false,
    data : [],
    error : '',
}

export const lignesReducer = (state = initialState ,  action)=>{
    switch (action.type) {
        case FETCH_BUS_LIGNES_REQUEST: return{
            ...state,
            loading : true,
            data: [],
            error:'',
        }

        case FETCH_BUS_LIGNES_SUCCESS: return{
            ...state,
            loading:false,
            data: action.payload,
            error: '',
        }

        case FETCH_BUS_LIGNES_FAILURE : return{
            ...state,
            loading: false,
            data: [],
            error: action.payload
        }
        default: return state;
    }

}


export const reservationBusReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_BUS_RESERVATION_REQUEST: return{
            ...state,
            loading : true,
            data: [],
            error:'',
        }
            
        case FETCH_BUS_RESERVATION_SUCCESS: return{
            ...state,
            loading:false,
            data: action.payload,
            error: '',
        };

        case FETCH_BUS_RESERVATION_FAILURE : return{
            ...state,
            loading: false,
            data: [],
            error: action.payload
        }
    
        default: return state;
    }
}