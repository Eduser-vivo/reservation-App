import { AJOUT_PLAT, RETRAIT_PLAT } from "../actionsType"

export const ajourPlat = (plat) =>{
    return{
        type: AJOUT_PLAT,
        plat
    }
}


export const retirerPlat = (plat) =>{
    return{
        type: RETRAIT_PLAT,
        plat
    }
}