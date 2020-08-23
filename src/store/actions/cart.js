import PepperestAxios from '../../libs/utils/PepperestAxios'
import * as actionTypes from './actionTypes';
import { setStateInLocalStorage, getStateFromLocalStorage, removeStateFromLocalStorage } from '../utility';
import { Cart, CartErrorMessages} from '../../libs/constants/PepperestWebServices';

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
     }).catch(error => {
       dispatch(failedLoadingCart(error))
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
