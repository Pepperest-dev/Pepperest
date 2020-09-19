import PepperestAxios from '../../libs/utils/PepperestAxios'
import * as actionTypes from './actionTypes';
import { setStateInLocalStorage, getStateFromLocalStorage, removeStateFromLocalStorage } from '../utility';
import { Cart, CartErrorMessages} from '../../libs/constants/PepperestWebServices';
import {setAlert} from './alert'
import { getStringHash } from 'libs/utils';

export const loadCustomerCart = (token, user) => {
  return (dispatch) => {
    dispatch(loadedCart())
    const headers = {
      Authorization: token,
      customerID: user.customerID
    }
    const params = { customerID: user.customerID }
    PepperestAxios.get(Cart.BUYER_CART, { params, headers})
    .then(response => {
      const cart = { cart: response.data.cart }
      dispatch(loadedCart(cart))
    }).catch(error => {
      console.error(error)
      dispatch(failedLoadingCart(error))
      dispatch( setAlert(CartErrorMessages.getCartData, 'error', getStringHash()))
    })
  }
}

export const productCheck = (token, user) => {
  return (dispatch) => {
    const productID = window.localStorage.getItem('product')
    if (productID) {
      dispatch(addToCart(token, user, productID))
      window.localStorage.removeItem('product')
    }
}}

export const addToCart = (token, user, productID, quantity=1) => {
  return (dispatch) => {
    const headers = {
      Authorization: token,
      customerID: user.customerID
    }
    const body = {
      customerID: user.customerID,
      productID,
      quantity
     }
     PepperestAxios.post(Cart.ADD, body, headers)
     .then(response => {
       const cart = { cart: response.data.cart }
       dispatch(loadedCart(cart))
       dispatch( setAlert('Item added to cart', 'success', getStringHash()))

     }).catch(error => {
       console.log(error.response);
       dispatch(failedLoadingCart(error))
       dispatch( setAlert('An error occurred.', 'error', getStringHash()))
     })
  }
}

export const removeItemFromCart = (token, user, cart_id, productID, quantity=1) => {
  return (dispatch) => {
    const headers = {
      Authorization: token,
      customerID: user.customerID
    }
    const body = {
      customerID: user.customerID,
      cart_id,
      productID,
      quantity
     }
     PepperestAxios.post(Cart.REMOVE, body, headers)
     .then(response => {
       const cart = { cart: response.data.cart }
       dispatch(loadedCart(cart))
       dispatch( setAlert('Item removed', 'success', getStringHash()))

     }).catch(error => {
       dispatch(failedLoadingCart(error))
       dispatch( setAlert('An error occurred.', 'error', getStringHash()))
     })
  }
}

export const loadingCart = () => {
  return {
    type: actionTypes.LOADING_CART
  }
}

export const loadedCart = (cart) => {
  return {
    type: actionTypes.FINISHED_LOADING_CART,
    cart,
  }
}

const failedLoadingCart = (error) => {
  return {
    type: actionTypes.FAILED_LOADING_CART,
    error: error
   }
}
