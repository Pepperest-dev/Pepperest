import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Orders, OrdersErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';
import { PAGE_TYPES as OrdersPageTypes } from 'libs/constants/PepperestWebServices/Orders';
import {setAlert} from './alert'
import { getStringHash } from 'libs/utils';

// dispatch( setAlert('An error occurred.', 'error', getStringHash()))

export const loadOrders = (token, user, pageType, extraParams = {}) => {
    return dispatch => {
        dispatch(loadingOrders(pageType))
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            customerID : user.customerID,
            pageType : pageType,
            ...extraParams
        }
        PepperestAxios.get(Orders.ORDERS, { params, headers })
        .then(response => {
            console.log(Orders.ORDERS);
            if(pageType === OrdersPageTypes.DASHBOARD) {
                const total = response.data.total
                const canceled = response.data.canceled
                const pending = response.data.pending
                const shipped = response.data.shipped
                const today_orders = response.data.today_orders
                const yesterday_orders = response.data.yesterday_orders
                dispatch(loadedOrdersDashboard(total, canceled, pending, shipped, today_orders, yesterday_orders, pageType))
            }else{
                const orders  = response.data.orders.data
                const meta = response.data.orders.meta
                const links = response.data.orders.links
                dispatch(loadedOrders(orders, meta, links, pageType))
            }
        })
        .catch(error => {
            dispatch(failedToLoadOrders(pageType, OrdersErrorMessages.getHistoryFailed))
        })
    };
}

export const placeOrder = (token, user, extraParams={}) => {
  return dispatch => {
    const headers = {
        Authorization : token,
        customerID : user.customerID
    }
    const body = {
        customerID : user.customerID,
        ...extraParams
    }
    PepperestAxios.post(Orders.PLACE_ORDER, body, headers)
        .then(response => {
          dispatch(redirect(response.data.paymentUrl))
          dispatch( setAlert('Order placed successfully.', 'success', getStringHash()))
        }).catch(error => {
            console.error(error.response);
            dispatch( setAlert('An error occurred.', 'error', getStringHash()))
        })
  }
}

export const confirmOrder = (token, user, extraParams = {}) => {
  return dispatch => {
      dispatch(confirmLoading(true))
      const headers = {
          Authorization : token,
          customerID : user.customerID
      }
      const params = {
          customerID : user.customerID,
          ...extraParams
      }
      PepperestAxios.get(Orders.CONFIRM_ORDER, { params, headers })
      .then(response => {
          dispatch({
            type: actionTypes.CONFIRM_ORDER_DETAILS,
            payload: {
              confirmOrderDetails: response.data
            }
          })
          dispatch(confirmLoading(false))
      })
      .catch(error => {
        console.error(error.response)
        dispatch( setAlert('An error occurred.', 'error', getStringHash()))
        dispatch(confirmLoading(false))
      })
  };
}

export const getAddress = (token, user) => {
    return dispatch => {
        // dispatch(loadingOrders(pageType))
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            customerID : user.customerID,
        }
        PepperestAxios.get(Orders.ADDRESS, { params, headers })
          .then(response => {
            dispatch( setAddress(response.data.addresses))
            }
        )
        .catch(error => {
            dispatch( setAlert('An error occurred.', 'error', getStringHash()))
            dispatch( addressError())
            // dispatch(failedToLoadOrders(pageType, OrdersErrorMessages.getHistoryFailed))
        })
    };
}

export const addAddress = (token, user, extraParams={}) => {
  return dispatch => {
    const headers = {
        Authorization : token,
        customerID : user.customerID
    }
    const body = {
        customerID : user.customerID,
        name: user.name,
        ...extraParams
    }
    PepperestAxios.post(Orders.ADD_ADDRESS, body, headers)
        .then(response => {
          dispatch( setAddress(response.data.addresses))
          dispatch( setAlert('Address added.', 'success', getStringHash()))
        }).catch(error => {
            console.error(error.response);
            dispatch( setAlert('An error occurred.', 'error', getStringHash()))
        })
  }
}

export const deleteAddress = (token, user, extraParams={}) => {
  return dispatch => {
    const headers = {
        Authorization : token,
        customerID : user.customerID
    }
    const body = {
        customerID : user.customerID,
        ...extraParams
    }
    PepperestAxios.post(Orders.REMOVE_ADDRESS, body, headers)
        .then(response => {
          dispatch( setAddress(response.data.addresses))
          dispatch( setAlert('Address deleted.', 'success', getStringHash()))
        }).catch(error => {
            console.error(error.response);
            dispatch( setAlert('An error occurred.', 'error', getStringHash()))
        })
  }
}

export const editAddress = (token, user, extraParams={}) => {
  return dispatch => {
    const headers = {
        Authorization : token,
        customerID : user.customerID
    }
    const body = {
        customerID : user.customerID,
        name: user.name,
        ...extraParams
    }
    PepperestAxios.post(Orders.UPDATE_ADDRESS, body, headers)
        .then(response => {
          dispatch( setAddress(response.data.addresses))
          dispatch( setAlert('Address updated.', 'success', getStringHash()))
        }).catch(error => {
            console.error(error.response);
            dispatch( setAlert('An error occurred.', 'error', getStringHash()))
        })
  }
}

export const setAddress = (addresses) => {
  return {
    type: actionTypes.LOAD_ADDRESS,
    addresses
  }
}

const redirect = url => {
  return {
    type: actionTypes.ORDER_REDIRECT,
    redirectUrl: url
  }
}

const confirmLoading = value => {
  return {
    type: actionTypes.CONFIRM_LOADING,
    loading: value
  }
}

const addressError = () => {
  return {
    type: actionTypes.LOAD_ADDRESS_ERROR
  }
}

export const loadingOrders  = (pageType) => {
    return {
        type: actionTypes.LOADING_ORDERS,
        pageType: pageType
    };
}

export const loadedOrdersDashboard = (total, canceled, pending, shipped, today_orders, yesterday_orders, pageType) => {
    const pageTypeUpdate = {
        total: total,
        canceled: canceled,
        pending: pending,
        shipped: shipped,
        today_orders: today_orders,
        yesterday_orders: yesterday_orders,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_ORDERS,
        pageType: pageType,
        pageTypeUpdate: pageTypeUpdate,
    };
}
export const loadedOrders = (orders, meta, links, pageType) => {
    const pageTypeUpdate = {
        orders,
        meta,
        links,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_ORDERS,
        pageType: pageType,
        pageTypeUpdate: pageTypeUpdate,
    };
}
export const failedToLoadOrders = (pageType, error) => {
    return {
        type: actionTypes.LOADING_ORDERS_FAILED,
        pageType: pageType,
        error: error,
    }
}
