import * as actionTypes from '../actions/actionTypes';
import {
	updateObject
} from '../utility';

const initialState = {
  products: [],
	meta: null,
	links: null,
	loading: false,
	loaded: false,
	error: null,
}

const loading = ( state, action ) => {
	return updateObject( state, {
		loading: true
	} );
}

const loadedProducts = ( state, action ) => {
	return updateObject( state, action.update );
}

const failedToLoadProducts = ( state, action ) => {
	return updateObject( state, {
		loading: false,
		loaded: false,
		error: action.error
	} );
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
		case actionTypes.LOADING_MERCHANT_PAGE:
			return loading( state, action );
		case actionTypes.LOADED_MERCHANT_PAGE:
			return loadedProducts( state, action );
    case actionTypes.FAILED_LOADING_MERCHANT_PAGE:
			return failedToLoadProducts( state, action )
    default:
			return state;
    }
}

export default reducer;
