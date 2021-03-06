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

	// loadingFacebookPages: false,
	loadedFacebookPages: false,
	errorFacebookPages: null,
	pages: [],
	selectedPage: {},

	loadingFacebookProducts: false,
	loadedFacebookProducts: false,
	errorFacebookProducts: null,
	items: [],
}

const loading = ( state, action ) => {
	return updateObject( state, {
		loading: true
	} );
}

const loadedProducts = ( state, action ) => {
	return updateObject( state, action.update );
}

const updateStoreProducts = (state, action) => {
	return updateObject(state, {products: action.products})
}

const failedToLoadProducts = ( state, action ) => {
	return updateObject( state, {
		loading: false,
		loaded: false,
		error: action.error
	} );
}

const loadingFacebookPages = ( state, action ) => {
	return updateObject( state, {
		loading: true
	} );
}

const loadedFacebookPages = ( state, action ) => {
	return updateObject( state, action.update );
}

const failedToLoadFacebookPages = ( state, action ) => {
	return updateObject( state, {
		loading: false,
		loadedFacebookPages: false,
		error: action.error
	} );
}

const selectPage = (state, action) => {
	return updateObject(state, {page: action.page})
}

const loadingFacebookProducts = ( state, action ) => {
	return updateObject( state, {
		loadingFacebookProducts: true
	} );
}

const loadedFacebookProducts = ( state, action ) => {
	return updateObject( state, action.update );
}

const failedToLoadFacebookProducts = ( state, action ) => {
	return updateObject( state, {
		loadingFacebookProducts: false,
		loadedFacebookProducts: false,
		errorFacebookProducts: action.error
	} );
}

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case actionTypes.LOADING_PRODUCTS:
			return loading( state, action );
		case actionTypes.FINISHED_LOADING_PRODUCTS:
			return loadedProducts( state, action );
		case actionTypes.UPDATE_STORE_PRODUCTS:
			return updateStoreProducts(state, action);
		case actionTypes.LOADING_PRODUCTS_FAILED:
			return failedToLoadProducts( state, action )
		case actionTypes.LOADING_FACEBOOK_PAGES:
			return loading( state, action );
		case actionTypes.FINISHED_LOADING_FACEBOOK_PAGES:
			return loadedFacebookPages( state, action );
		case actionTypes.LOADING_FACEBOOK_PAGES_FAILED:
			return failedToLoadFacebookPages( state, action )
		case actionTypes.SELECT_PAGE:
			return selectPage(state, action)
		case actionTypes.LOADING_FACEBOOK_PRODUCTS:
			return loading( state, action );
		case actionTypes.FINISHED_LOADING_FACEBOOK_PRODUCTS:
			return loadedProducts( state, action );
		case actionTypes.LOADING_FACEBOOK_PRODUCTS_FAILED:
			return failedToLoadProducts( state, action )
		default:
			return state;
	}
};

export default reducer;
