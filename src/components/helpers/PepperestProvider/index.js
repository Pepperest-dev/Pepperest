import React, { useState } from "react";
import { PepperestContext } from "components/helpers/constant";

const PepperestProvider = (props) => {
  const [localState, setLocalState] = useState({
    showPaymentModal: false,
    showProductModal: false,
    showPaymentListModal: false,
    showCustomerListModal: false,
    showProductListModal: false,
    showOrdersListModal: false,
    showFilterModal: false,
    showSortModal: false,
    showEditProductModal: false,
    showReportIssueModal: false,
    showBlockCustomerModal: false,
    showDeleteProductModal: false,
    showRefundCustomerModal: false,
    showAddNewAddressModal: false,
    showEditAddressModal: false,
    showRemoveAddressModal: false,
    showPublishInstagramImageModal: false,
    showRequestPaymentModal: false,
    paymentDetails: null,
    item: "https://unsplash.com/photos/7Z03R1wOdmI",
    productForUpdate: {},
    productDetails: {},
    productForDeleting: {},
  });
  return (
    <PepperestContext.Provider
      value={{
        state: { ...localState },
        updateShowPaymentModal: (value) => {
          setLocalState({ ...localState, showPaymentModal: value });
        },
        updateShowProductModal: (value) => {
          setLocalState({ ...localState, showProductModal: value });
        },
        updateShowPaymentListModal: (value, paymentDetails) => {
          if (paymentDetails) {
            setLocalState({ ...localState, paymentDetails, showPaymentListModal: value });

          } else {
            setLocalState({ ...localState, showPaymentListModal: value });
          }        },
        updateShowCustomerListModal: (value, customerDetails) => {
          setLocalState({ ...localState, customerDetails, showCustomerListModal: value });
        },
        updateShowProductListModal: (value, productDetails = {}) => {
          setLocalState({ ...localState, productDetails, showProductListModal: value });
        },
        updateShowOrdersListModal: (value) => {
          setLocalState({ ...localState, showOrdersListModal: value });
        },
        updateShowFilterModal: (value) => {
          setLocalState({ ...localState, showFilterModal: value });
        },
        updateShowSortModal: (value) => {
          setLocalState({ ...localState, showSortModal: value });
        },
        updateShowEditProductModal: (value, product) => {
          setLocalState({ ...localState,
            productForUpdate: product,
            showEditProductModal: value,
           });
        },
        updateShowReportIssueModal: (value) => {
          setLocalState({ ...localState, showReportIssueModal: value });
        },
        updateShowBlockCustomerModal: (value) => {
          setLocalState({ ...localState, showBlockCustomerModal: value });
        },
        updateShowDeleteProductModal: (value, productForDeleting={}) => {
          setLocalState({ ...localState, productForDeleting, showDeleteProductModal: value });
        },
        updateShowRefundCustomerModal: (value) => {
          setLocalState({ ...localState, showRefundCustomerModal: value });
        },
        updateShowAddNewAddressModal: (value) => {
          setLocalState({ ...localState, showAddNewAddressModal: value });
        },
        updateShowEditAddressModal: (value) => {
          setLocalState({ ...localState, showEditAddressModal: value });
        },
        updateShowRemoveAddressModal: (value) => {
          setLocalState({ ...localState, showRemoveAddressModal: value });
        },
        updateShowPublishInstagramImageModal: (value, item) => {
          setLocalState({
            ...localState, item,
            showPublishInstagramImageModal: value,
          });
        },
        updateShowRequestPaymentModal: (value) => {
          setLocalState({ ...localState, showRequestPaymentModal: value });
        },
      }}
    >
      {props.children}
    </PepperestContext.Provider>
  );
};

export default PepperestProvider;
