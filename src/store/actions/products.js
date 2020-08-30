import PepperestAxios from '../../libs/utils/PepperestAxios'
import {
	Products,
	ProductsErrorMessages
} from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const getFacebookPages = ( token, user, extraParams = {} ) => {
	return dispatch => {
		dispatch( loadingFacebookPages() )
		const headers = {
			Authorization: token,
			customerID: user.customerID
		}
		const params = {
			merchantID: user.customerID,
			"provider": "facebook",
			...extraParams
		}
		PepperestAxios.get( Products.GET_INFO, {
				params,
				headers
			} )
			.then( ( response ) => {
				const pages = response.data.pages;
				console.log( pages );
				dispatch( loadedFacebookPages( pages ) )

			} ).catch( ( error ) => {
				console.error( error.response )
				dispatch( failedToLoadFacebookPages( error ) )
			} )
	}
}

export const getPageData = ( token, user, extraParams = {} ) => {
	return dispatch => {
		dispatch( loadingFacebookProduct() )
		const headers = {
			Authorization: token,
			customerID: user.customerID
		}
		const params = {
			merchantID: user.customerID,
			"provider": "facebook",
			...extraParams
		}
		PepperestAxios.get( Products.GET_PAGE_PRODUCTS, {
				params,
				headers
			} )
			.then( ( response ) => {
				const pages = response.data.pages;
				console.log( pages );
				dispatch( loadedFacebookPages( pages ) )

			} ).catch( ( error ) => {
				console.error( error.response )
				dispatch( failedToLoadFacebookPages( error ) )
			} )
	}
}

export const loadProduct = ( token, user, extraParams = {} ) => {
	return dispatch => {
		dispatch( loadingProduct() )
		const headers = {
			Authorization: token,
			customerID: user.customerID
		}
		const params = {
			merchantID: user.customerID,
			...extraParams
		}
		PepperestAxios.get( Products.PRODUCTS, {
				params,
				headers
			} )
			.then( response => {
				const products = response.data.products.data
				const meta = response.data.products.meta
				const links = response.data.products.links
				dispatch( loadedProduct( products, meta, links ) )
			} )
			.catch( error => {
				dispatch( failedToLoadProduct( ProductsErrorMessages.getHistoryFailed ) )
			} )
	};
}

export const loadingProduct = () => {
	return {
		type: actionTypes.LOADING_PRODUCTS,
	};
}

export const loadedProduct = ( products, meta, links ) => {
	const update = {
		products,
		meta,
		links,
		loading: false,
		loaded: true,
		error: null,
	}
	return {
		type: actionTypes.FINISHED_LOADING_PRODUCTS,
		update: update,
	};
}
export const failedToLoadProduct = ( error ) => {
	return {
		type: actionTypes.LOADING_PRODUCTS,
		error: error,
	}
}
export const loadingFacebookPages = () => {
	return {
		type: actionTypes.LOADING_FACEBOOK_PAGES,
	};
}

export const loadedFacebookPages = ( pages ) => {
	const update = {
		pages,
		loadingFacebookPages: false,
		loadedFacebookPages: true,
		errorFacebookPages: null,
	}
	return {
		type: actionTypes.FINISHED_LOADING_FACEBOOK_PAGES,
		update: update,
	};
}
export const failedToLoadFacebookPages = ( error ) => {
	return {
		type: actionTypes.LOADING_FACEBOOK_PAGES_FAILED,
		error: error,
	}
}

export const loadingFacebookProduct = () => {
	return {
		type: actionTypes.LOADING_FACEBOOK_PRODUCTS,
	};
}

export const loadedFacebookProduct = ( products, meta, links ) => {
	const update = {
		products,
		meta,
		links,
		loadingFacebookProducts: false,
		loadedFacebookProducts: true,
		errorFacebookProducts: null,
	}
	return {
		type: actionTypes.FINISHED_LOADING_FACEBOOK_PRODUCTS,
		update: update,
	};
}
export const failedToLoadFacebookProduct = ( error ) => {
	return {
		type: actionTypes.LOADING_FACEBOOK_PRODUCTS,
		error: error,
	}
}
