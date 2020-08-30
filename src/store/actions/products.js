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


// AQBULjv1UJNGaONgFe_9POew_lIJ9IMoeFLAzP2Xcg77a92qheQfZoo11Wo4ykYZfJhs0-xPpMmvLQGCf5sBtRRHSo6De49JXVLaKaLWIx4xi803dj3AHJvcFfSrn-0KrwvW24rmCSHqNn5YfGQaEtBNsdd0EBjvBfPc4UgScToQ7w-uomqcfeHhTSpXqHGGWHhmqCBbClBUTBils_cA-YUiXi_32zp_rXX2j2NC-cvE-v5I0pZT53ziisTZH7ItFWNA7oeillNAijUKtmfLAY5TnhWhqv2NY1q0fXg_YYuXhRD-RL3C3slHJKBizGTVf1s

// AQApPPLR5NB98t-Kh2C8M38tJxDNVfcFO_VRjxm-q7D9X-x6ORaKwYvJMVNahQstEJsdgfHzBcnq5jy-Yp6g2wb7aqWKrPxS31DATXppbGQKpjqWqOpf1gO0eiybiGZ9PBvaZkUUuGYNHuyUkdiLsWa971_egvAIg9Xyacm3mpk7-DeOT_9ctL8r4wcuN2Qt-6jwuVUsumZurmcolxnPN9HKtVLHLW467OiK_sGJSD11DkaCLTbP7an4OI6sQjS_g83MpAeULyjqneADUGQvft3pw6o1jL1je8i4gyCfXfn4O-Muh8my-lt28ppzOIWM6M8