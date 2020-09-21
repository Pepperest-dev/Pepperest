import { PAGE_TYPES as OrdersPageTypes } from "libs/constants/PepperestWebServices/Orders";
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  addresses: [],
  addressError: null
};
Object.values(OrdersPageTypes).forEach((pageTypes) => {
  initialState[pageTypes] =
    pageTypes !== OrdersPageTypes.DASHBOARD
      ? {
          orders: [],
          meta: null,
          links: null,
          loading: false,
          loaded: false,
          error: null,
        }
      : {
          total: "--",
          canceled: "--",
          pending: "--",
          shipped: "--",
          today_orders: [],
          yesterday_orders: [],
          loading: false,
          loaded: false,
          error: null,
        };
});

const loading = (state, action) => {
  const updatedPaymentLoadingState = updateObject(state[action.pageType], {
    loading: true,
  });
  const update = {};
  update[action.pageType] = updatedPaymentLoadingState;
  return updateObject(state, update);
};

const setAddress = (state, action) => {
  const update = {
    addresses: action.addresses
  }
  return updateObject(state, update)
}

const addressError = (state, action) => {
  return updateObject(state, {addressError: true})
}

const loadedOrder = (state, action) => {
  const update = {};
  update[action.pageType] = action.pageTypeUpdate;
  return updateObject(state, update);
};

const failedToLoadOrder = (state, action) => {
  const errorChanges = {
    loading: false,
    loaded: false,
    error: action.error,
  };
  const updatedPaymentLoadingState = updateObject(
    state[action.pageType],
    errorChanges,
  );
  const update = {};
  update[action.pageType] = updatedPaymentLoadingState;
  return updateObject(state, update);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_ORDERS:
      return loading(state, action);
    case actionTypes.FINISHED_LOADING_ORDERS:
      return loadedOrder(state, action);
    case actionTypes.LOADING_ORDERS_FAILED:
      return failedToLoadOrder(state, action);
    case actionTypes.LOAD_ADDRESS:
      return setAddress(state, action)
    case actionTypes.LOAD_ADDRESS_ERROR:
      return addressError(state, action)
    default:
      return state;
  }
};

export default reducer;
