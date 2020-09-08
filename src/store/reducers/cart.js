import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
// import { STATUS as PaymentStatus } from 'libs/constants/PepperestWebServices/Payments';

let initialState = {
  cart: null,
  loading: false,
  loaded: false,
  error: null,
}

const loading = (state, action) => {
    return updateObject( state, {loading : true} );
}

const loadedCart = (state, action) => {
    return updateObject( state, action.cart );
}

const failedToLoadCart = (state, action) => {
    return updateObject( state, {
        loading : false,
        loaded :false,
        error : action.error
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOADING_CART: return loading(state, action);
        case actionTypes.FINISHED_LOADING_CART: return loadedCart(state, action);
        case actionTypes.FAILED_LOADING_CART : return failedToLoadCart(state, action)
        default:
            return state;
    }
};

export default reducer;
