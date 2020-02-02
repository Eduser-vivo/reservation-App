import { FETCH_LOGIN_REQUEST,
     FETCH_LOGIN_SUCCESS, 
     FETCH_LOGIN_FAILURE, 
     LOG_OUT, 
     FETCH_CLIENT_SUCCESS,
      FETCH_CLIENT_FAILURE, 
      FETCH_CLIENT_REQUEST } from "../actionsType";
import AuthService from '../../auth/auth';


const initialState = {
    loading: false,
    data : [],
    error: '',
    isLog : AuthService.getLog()
}

export const loginReducer  = (state = initialState, action)=>{

        if(action.type === FETCH_LOGIN_REQUEST){
            return{
                ...state,
                loading : true,
                data: [],
                error: '',
                isLog: false,
            }
        }

        if(action.type === FETCH_LOGIN_SUCCESS){
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
                isLog: true
            }  
        } 

        if (action.type === FETCH_LOGIN_FAILURE) 
        {
                return{
                ...state, 
                loading: false,
                data: [],
                error: action.payload,
                isLog:false
              }
        }

        if (action.type === LOG_OUT ){
            window.localStorage.clear();
            return{
            ...state,
            loading: false,
            data: [],
            error:'',
            isLog: false,
            }
        }else{
            return state;
        }
}


export const getClientReducer = (state= { loading: false, data: AuthService.getClient(), error: ''}, action)=> {
    switch (action.type) {
        case FETCH_CLIENT_REQUEST: return{
            ...state,
            loading: true,
            data: [],
            error: '',
        }

        case FETCH_CLIENT_SUCCESS: return{
            ...state,
            loading: false,
            data: action.payload,
            error: '',
        }

        case FETCH_CLIENT_FAILURE: return{
            ...state,
            loading: false,
            data :[],
            error: action.payload
        }
        default:return state;
    }
}
