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
        updateShowPaymentListModal: (value) => {
          setLocalState({ ...localState, showPaymentListModal: value });
        },
        updateShowCustomerListModal: (value) => {
          setLocalState({ ...localState, showCustomerListModal: value });
        },
        updateShowProductListModal: (value) => {
          setLocalState({ ...localState, showProductListModal: value });
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
        updateShowEditProductModal: (value) => {
          setLocalState({ ...localState, showEditProductModal: value });
        },
        updateShowReportIssueModal: (value) => {
          setLocalState({ ...localState, showReportIssueModal: value });
        },
        updateShowBlockCustomerModal: (value) => {
          setLocalState({ ...localState, showBlockCustomerModal: value });
        },
        updateShowDeleteProductModal: (value) => {
          setLocalState({ ...localState, showDeleteProductModal: value });
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
        updateShowPublishInstagramImageModal: (value) => {
          setLocalState({
            ...localState,
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
