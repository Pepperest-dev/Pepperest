/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useRef, useEffect, useState } from "react";
import { PepperestContext } from "components/helpers/constant";
import useResizeObserver from "components/customHook/useResizeObserver";

const OrderListItemDetailMobileModal = () => {
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
          pepperestContext.updateShowOrdersListModal(false);
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
                pepperestContext.updateShowOrdersListModal(false);
              }}
            >
              Close
            </div>
          </div>
          <ul className="list-modal__list">
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Order ID</p>
              <p className="list-item-detail__main-item__details">
                #9999202241
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Customer</p>
              <p className="list-item-detail__main-item__details">
                James Blunt
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Order Date</p>
              <p className="list-item-detail__main-item__details">
                January 21, 2019 / 15:00:23pm
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Total Amount</p>
              <p className="list-item-detail__main-item__details">
                NGN 530,600
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Customer Email
              </p>
              <p className="list-item-detail__main-item__details">
                Tohbeey@gmail.com
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Status</p>
              <p className="list-item-detail__main-item__details list-item__status-text text--active">
                Active
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Delivery Addresss
              </p>
              <p className="list-item-detail__main-item__details">
                40 Abiodun Alakemo str, off ikorodu road, ketu, lagos state.
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
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Payment Method
              </p>
              <p className="list-item-detail__main-item__details">
                Flutterwave
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
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrderListItemDetailMobileModal;
