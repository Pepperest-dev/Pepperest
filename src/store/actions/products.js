import PepperestAxios from '../../libs/utils/PepperestAxios'
import {
	Products,
	ProductsErrorMessages
} from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';
import { setAddress } from './orders'
import { Orders } from '../../libs/constants/PepperestWebServices';
import axios from "axios"
import {setAlert} from './alert'
import { getStringHash } from 'libs/utils';

export const publishSingleProduct = (token, user, extraParams = {}) => {
	return dispatch => {
		const headers = {
			Authorization: token,
			customerID: user.customerID
		}
		const body = {
			merchantID: user.customerID,
			...extraParams
		}
		PepperestAxios.post(Products.PUBLISH_SINGLE_PRODUCT, body, {headers})
		.then((response) => {
			const products = response.data.products.data
			const meta = response.data.products.meta
			const links = response.data.products.links
			dispatch( loadedProduct( products, meta, links ) )
		}).catch((error) => {
			console.error(error.response)
			dispatch( setAlert('An error occurred', 'error', getStringHash()))
		})	}
}

export const publishSingleSocialProduct = (token, user, extraParams = {}) => {
	return dispatch => {
		const headers = {
			Authorization: token,
			customerID: user.customerID
		}
		const body = {
			merchantID: user.customerID,
			...extraParams
		}
		PepperestAxios.post(Products.PUBLISH_SINGLE_SOCIAL_PRODUCT, body, {headers})
		.then((response) => {
			const products = response.data.products.data
			const meta = response.data.products.meta
			const links = response.data.products.links
			dispatch( loadedProduct( products, meta, links ) )
		}).catch((error) => {
			console.error(error.response)
			dispatch( setAlert('An error occurred', 'error', getStringHash()))
		})	}
}

export const updateProduct = ( token, user, extraParams = {}) => {
	return dispatch => {
		const headers = {
			Authorization: token,
			customerID: user.customerID
		}
		const body = {
			merchantID: user.customerID,
			...extraParams
		}
		PepperestAxios.post(Products.UPDATE_PRODUCT, body, {headers})
		.then((response) => {
			const products = response.data.products.data
			const meta = response.data.products.meta
			const links = response.data.products.links
			dispatch( loadedProduct( products, meta, links ) )
		}).catch((error) => {
			console.error(error.response)
			dispatch( setAlert('An error occurred', 'error', getStringHash()))
		})
	}
}

export const removeProduct = ( token, user, extraParams = {}) => {
	return dispatch => {
		const headers = {
			Authorization: token,
			customerID: user.customerID
		}
		const params = {
			merchantID: user.customerID,
			...extraParams
		}
		PepperestAxios.get(Products.REMOVE_PRODUCT,{
				params,
				headers
			})
		.then((response) => {
			const products = response.data.products.data
			// const meta = response.data.products.meta
			// const links = response.data.products.links
			dispatch( updateStoreProducts( products ) )
		}).catch((error) => {
			console.error(error.response)
			dispatch( setAlert('An error occurred', 'error', getStringHash()))
		})	}
}

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
			...extraParams
		}
		PepperestAxios.get( Products.GET_PAGE_PRODUCTS, {
				params,
				headers
			} )
			.then( ( response ) => {
				const items = []
				response.data.items.forEach((item, index)=>{
					items.push({
						id: index +1,
						url: item,
						published: false
					})
				})

				dispatch( loadedFacebookProduct( items ) )

			} ).catch( ( error ) => {
				console.error( error.response )
				dispatch( failedToLoadFacebookProduct( error ) )
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

export const loadProductsAndAddress = ( token, user, extraParams = {} ) => {
	return dispatch => {
		const headers = {
			Authorization: token,
			customerID: user.customerID
		}
		const params = {
			merchantID: user.customerID,
			customerID: user.customerID,
			...extraParams
		}
		axios.all([
			PepperestAxios.get( Products.PRODUCTS, {params, headers}),
			PepperestAxios.get(Orders.ADDRESS, { params, headers })
		]).then(axios.spread((...responses) => {
			const products = responses[0].data.products.data
			const meta = responses[0].data.products.meta
			const links = responses[0].data.products.links
			dispatch( loadedProduct( products, meta, links ) )
			dispatch(setAddress(responses[1].data.addresses))
		})).catch((error) => {
		console.error(error.response)
		dispatch( setAlert('An error occurred', 'error', getStringHash()))
	})
	}
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
const updateStoreProducts = (products) =>{
	return {
		type: actionTypes.UPDATE_STORE_PRODUCTS,
		products
	}
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

export const loadedFacebookProduct = ( items ) => {
	const update = {
		items,
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
export const selectPage = (page) => {
	return {
		type: actionTypes.SELECT_PAGE,
		page: page,
	}
}
