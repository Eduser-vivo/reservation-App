import { 
    CREATION_RESERVATION_REQUEST, 
    CREATION_RESERVATION_SUCCESS, 
    CREATION_RESERVATION_FAILURE, 
    CLEAR_OLD_RESERVATION_DATA,
    AJOUT_PLAT,
    RETRAIT_PLAT,
    AJOUT_QUANT,
    RETRAIT_QUANT
     } from "../actionsType";




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


export const initialState3 = {
    addedItems : [],
    shoppings : [],
}

export const cardReducer = (state = initialState3, action)=>{
    
    if(action.type === AJOUT_PLAT){
        let items = action.plat;
        
        let addedOneItem = items.find(item => item['@id'] === action.id);
            
        if(addedOneItem){
            let panier = {};
            let shop = {};
            panier.plat = addedOneItem["@id"];
            shop.plat = addedOneItem;


            let existed_item = state.addedItems.find(item => action.id === item.plat)
            let existed_item_shop = state.shoppings.find(item => action.id === item.plat['@id'])
            
            if(existed_item ){
                existed_item.quantite += 1;
                existed_item_shop.quantite += 1;
                
                
                return{
                    ...state
                }
            }else{
                panier.quantite = 1
                shop.quantite = 1
                
                return{
                    addedItems : [...state.addedItems, panier],
                    shoppings : [...state.shoppings, shop]
                }
            }
        }

    }
    if(action.type === RETRAIT_PLAT){
        let itemToRemove = state.addedItems.find(item => action.id === item.plat);
        let itemToRemoveShop = state.shoppings.find(item => action.id === item.plat['@id']);

        if(itemToRemove){

            let new_items = state.addedItems.filter(item => action.id !== item.plat);
            let new_items_shop = state.shoppings.filter(item => action.id !== item.plat['@id']);

            return{
                ...state,
                addedItems : new_items,
                shoppings : new_items_shop
            }
        }


    }
    if(action.type === AJOUT_QUANT){
        let existed_item = state.addedItems.find(item => action.id === item.plat);
        let existed_item_shop = state.shoppings.find(item => action.id === item.plat['@id']);

        existed_item.quantite += 1;
        existed_item_shop.quantite += 1;

        return{
            ...state
        }
    }
    if(action.type === RETRAIT_QUANT){
        let existed_item = state.addedItems.find(item => action.id === item.plat);
        let existed_item_shop = state.shoppings.find(item => action.id === item.plat['@id']);

        if(existed_item.quantite === 1){
            let new_items = state.addedItems.filter(item => action.id !== item.plat);
            let new_items_shop = state.shoppings.filter(item => action.id !== item.plat['@id']);

            return{
                ...state,
                addedItems : new_items,
                shoppings : new_items_shop
            }
        }else{
            existed_item.quantite -= 1;
            existed_item_shop.quantite -= 1;

            return{
                ...state
            }
        }
    }
    else{
        return state;
    }

}
