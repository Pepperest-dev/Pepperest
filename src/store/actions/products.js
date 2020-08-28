import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Products, ProductsErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const getProductsInfo = (token, user, extraParams = {}) => {
  return dispatch => {
      dispatch(loadingProduct())
      const headers = {
          Authorization : token,
          customerID : user.customerID
      }
      const params = {
          merchantID : user.customerID,
          "provider" : "facebook",
          ...extraParams
      }
      console.log(headers);
      console.log(params);
      PepperestAxios.get(Products.GET_INFO, { params, headers })
      .then((response) => {
        console.log(response);
      }).catch((error) => console.error(error.response))
   }
}

export const loadProduct = (token, user, extraParams = {}) => {
    return dispatch => {
        dispatch(loadingProduct())
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            merchantID : user.customerID,
            ...extraParams
        }
        PepperestAxios.get(Products.PRODUCTS, { params, headers })
        .then(response => {
            const products = response.data.products.data
            const meta = response.data.products.meta
            const links = response.data.products.links
            dispatch(loadedProduct(products, meta, links))
        })
        .catch(error => {
            dispatch(failedToLoadProduct(ProductsErrorMessages.getHistoryFailed))
        })
    };
}

export const loadingProduct = () => {
    return {
        type: actionTypes.LOADING_PRODUCTS,
    };
}

export const loadedProduct = (products, meta, links) => {
    const update = {
        products,
        meta,
        links,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_PRODUCTS,
        update: update,
    };
}
export const failedToLoadProduct = (error) => {
    return {
        type: actionTypes.LOADING_PRODUCTS,
        error: error,
    }
}
