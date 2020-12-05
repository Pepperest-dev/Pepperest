import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Customers, CustomersErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';
import {setAlert} from './alert'
import { getStringHash } from 'libs/utils';

export const loadCustomer = (token, user, extraParams = {}) => {
    return dispatch => {
        dispatch(loadingCustomer())
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            merchantID : user.customerID,
            ...extraParams
        }
        PepperestAxios.get(Customers.CUSTOMER, { params, headers })
        .then(response => {
            const customers = response.data.customers.data
            const meta = response.data.customers.meta
            const links = response.data.customers.links
            dispatch(loadedCustomer(customers, meta, links))
        })
        .catch(error => {
            dispatch(failedToLoadCustomer(CustomersErrorMessages.getHistoryFailed))
        })
    };
}

export const reportIssue = (token, user, extraParams = {}) => dispatch => {
    const headers = {
      Authorization: token,
      customerID: user.customerID
    }
    const body = {
      customerID : user.customerID,
      ...extraParams
    }
    PepperestAxios.post(Customers.REPORT_ISSUE, body, {headers}).then(res => {
      console.log(res);
      dispatch( setAlert('Your issue has been reported successfully', 'success', getStringHash()))
    }).catch(err => {
      if (err.response) console.error(err.response)
      else console.error(err)
      dispatch( setAlert('An error occurred', 'error', getStringHash()))
    })
}
export const requestRefund = (token, user, extraParams = {}) => dispatch => {
    const headers = {
      Authorization: token,
      customerID: user.customerID
    }
    const body = {
      customerID : user.customerID,
      ...extraParams
    }
    PepperestAxios.post(Customers.REQUEST_REFUND, body, {headers}).then(res => {
      console.log(res);
    }).catch(err => {
      if (err.response) console.error(err.response)
      else console.error(err)
    })
}
export const requestPayment = (token, user, extraParams = {}) => dispatch => {
    const headers = {
      Authorization: token,
      customerID: user.customerID
    }
    const body = {
      customerID : user.customerID,
      ...extraParams
    }
    PepperestAxios.post(Customers.REQUEST_PAYMENT, body, {headers}).then(res => {
      console.log(res);
    }).catch(err => {
      if (err.response) console.error(err.response)
      else console.error(err)
    })
}

export const loadingCustomer = () => {
    return {
        type: actionTypes.LOADING_CUSTOMERS,
    };
}

export const loadedCustomer = (customers, meta, links) => {
    const update = {
        customers,
        meta,
        links,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_CUSTOMERS,
        update: update,
    };
}
export const failedToLoadCustomer = (error) => {
    return {
        type: actionTypes.LOADING_CUSTOMERS_FAILED,
        error: error,
    }
}
