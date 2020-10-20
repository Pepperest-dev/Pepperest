import React, { useState, useEffect } from "react";
import { CloseIcon } from "components/vectors";
// import { InputWithoutLabel, SelectInputWithoutLabel } from "components/blocks";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";
import useResizeObserver from "components/customHook/useResizeObserver";


const Modal = props => {
  const {close, orders} = props
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
      <div className="list-modal-overlay" style={{display:'block'}} />
      <div
        className="list-modal"
        onClick={() => {close(false)}}
        style={{display:'block'}}
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
              onClick={() => {close(false)}}
            >
              Close
            </div>
          </div>
          <ul className="list-modal__list">
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Order ID</p>
              <p className="list-item-detail__main-item__details">
                {orders.order.orderId}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Customer</p>
              <p className="list-item-detail__main-item__details">
                {orders.order.customerName}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Order Date</p>
              <p className="list-item-detail__main-item__details">
                {orders.order.orderDate}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Total Amount</p>
              <p className="list-item-detail__main-item__details">
                {orders.orderPayment.amount}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Customer Email
              </p>
              <p className="list-item-detail__main-item__details">
                {orders.order.customerEmail}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Status</p>
              <p className="list-item-detail__main-item__details list-item__status-text text--active">
                {orders.orderPayment.payment_status}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Delivery Addresss
              </p>
              <p className="list-item-detail__main-item__details">
                {orders.order.address}
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Items in Order
              </p>
              <div className="list-item__details-product__image-container">
                <img
                  className="list-item__details-product__image"
                  src="/assets/images/product.jpeg"
                  alt="product"
                />
                <img
                  className="list-item__details-product__image"
                  src="/assets/images/product.jpeg"
                  alt="product"
                />
                <img
                  className="list-item__details-product__image"
                  src="/assets/images/product.jpeg"
                  alt="product"
                />
                <img
                  className="list-item__details-product__image"
                  src="/assets/images/product.jpeg"
                  alt="product"
                />
              </div>
            </li>
            {/*<li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Payment Method
              </p>
              <p className="list-item-detail__main-item__details">
                Flutterwave
              </p>
            </li>*/}

            <div className="list-modal__list-item list-modal__list-item__alternate">
              <div className="button button-md button--grey">Print Receipt</div>
              {/*<PepperestContext.Consumer>
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
              </PepperestContext.Consumer>*/}
            </div>
          </ul>
        </div>
      </div>
    </>
  )}

export default Modal
