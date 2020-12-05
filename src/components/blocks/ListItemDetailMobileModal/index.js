/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import { PepperestContext } from "components/helpers/constant";
import useResizeObserver from "components/customHook/useResizeObserver";

const ListItemDetailMobileModal = ({paymentDetails}) => {
  const {
    status,
    customerName,
    customerEmail,
    paymentName,
    amount,
    transactionId,
    transactionDatetime,
    paymentDescription,
    date,
    statusText,
    deliveryDatetime,
  } = paymentDetails
  const pepperestContext = useContext(PepperestContext);
  const [ref, { contentRect }] = useResizeObserver();
  const [state, setState] = useState({ style: {} });

  useEffect(() => {
    if (contentRect) {
      setState({
        ...state,
        style: {
          top:
            contentRect.height >= window.innerHeight - 350 ? "350px" : "unset",
          bottom:
            contentRect.height >= window.innerHeight - 350 ? "unset" : "0",
        },
      });
    }
  }, [contentRect]);
  return (
    <>
      <div className="list-modal-overlay" />
      <div
        className="list-modal"
        onClick={() => {
          pepperestContext.updateShowPaymentListModal(false);
        }}
      >
        <div
          className="list-modal__body"
          onClick={(event) => {
            event.stopPropagation();
          }}
          ref={ref}
          style={state.style}
        >
          <div className="list-modal__header">
            <div
              className="list-item-detail__container-close"
              onClick={() => {
                pepperestContext.updateShowPaymentListModal(false);
              }}
            >
              Close
            </div>
          </div>
          <ul className="list-modal__list">
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Transaction ID
              </p>
              <p className="list-item-detail__main-item__details">
                {transactionId}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Customer</p>
              <p className="list-item-detail__main-item__details">
                {customerName}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Transaction Date
              </p>
              <p className="list-item-detail__main-item__details">
                {transactionDatetime}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Payment Name</p>
              <p className="list-item-detail__main-item__details">
                {paymentName}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Delivery Date
              </p>
              <p className="list-item-detail__main-item__details">
                {deliveryDatetime} ( Your expected delivery date is 2 days from
                payment date.)
              </p>
            </li>
            <li className="list-modal__list-item">
              <div className="list-item__payment-container">
                <div>
                  <p className="list-item-detail__main-item__title">Amount</p>
                  <p className="list-item-detail__main-item__details">
                    {amount}
                  </p>
                </div>
                <div className="button button-md button--orange">
                  Make Payment
                </div>
              </div>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Customer Email
              </p>
              <p className="list-item-detail__main-item__details">
                {customerEmail}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Status</p>
              <p className="list-item-detail__main-item__details list-item__status-text text--pending">
                {statusText}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Payment Description
              </p>
              <p className="list-item-detail__main-item__details">
                {paymentDescription}
              </p>
            </li>
            <div className="list-modal__list-item list-modal__list-item__alternate">
              <div className="button button-md button--grey">Print Receipt</div>
              <PepperestContext.Consumer>
                {(context) => (
                  <div
                    role="presentation"
                    className="button button-md button--grey"
                    onClick={() => {
                      context.updateShowReportIssueModal(true);
                    }}
                  >
                    Report an issue
                  </div>
                )}
              </PepperestContext.Consumer>
              <PepperestContext.Consumer>
                {(context) => (
                  <div
                    className="button button-md button--grey"
                    onClick={() => {
                      context.updateShowRefundCustomerModal(true, transactionId);
                    }}
                  >
                    Refund customer
                  </div>
                )}
              </PepperestContext.Consumer>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListItemDetailMobileModal;
