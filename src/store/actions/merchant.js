import PepperestAxios from '../../libs/utils/PepperestAxios'
import {
	Products,
	ProductsErrorMessages
} from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';
import {setAlert} from './alert'
import { getStringHash } from 'libs/utils';


export const getMerchantStoreProducts = (merchantCode, page = 1) => {
	return (dispatch) => {
    dispatch(loadingMerchantPage())
    const params = { merchantCode }
    PepperestAxios.get( `${Products.MERCHANT_STORE}?page=${page}`, { params })
    .then((response) => {
      const products = response.data.products.data
      const meta = response.data.products.meta
      const links = response.data.products.links
      dispatch( loadedProduct( products, meta, links ) )
    }).catch((error) =>
      // dispatch( failedToLoadMerchantPage( ProductsErrorMessages.getMerchantFailed ) )
      dispatch( setAlert(ProductsErrorMessages.getMerchantFailed, 'error', getStringHash()))
  )
  }
}

export const createInvoice = (token, user, extraParams = {}) => dispatch => {
	const headers = {
			Authorization : token,
			customerID : user.customerID
	}
	const body = {
		merchant_id: user.customerID,
		...extraParams
	}
	console.log(extraParams);
	PepperestAxios.post(Products.CREATE_INVOICE, body, headers).then((response) =>{
		console.log(response);
	}).catch((error) => console.error(error.response))
}

export const loadingMerchantPage = () => {
	return {
		type: actionTypes.LOADING_MERCHANT_PAGE,
	};
}

export const failedToLoadMerchantPage = ( error ) => {
	return {
		type: actionTypes.FAILED_LOADING_MERCHANT_PAGE,
		error: error,
	}
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
		type: actionTypes.LOADED_MERCHANT_PAGE,
		update: update,
	};
}
