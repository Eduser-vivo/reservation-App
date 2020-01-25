import { AJOUT_PLAT } from "../actionsType";


const initialState = {
    nbreplat :0,
    tabPlat : []
}


export const platReducer = (state = initialState, action)=>{
    switch (action.type) {
        case AJOUT_PLAT: return{
            nbreplat
        }
        default:
            break;
    }
}