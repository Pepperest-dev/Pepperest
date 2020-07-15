/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { getStatusTextClass, getIndicatorClass } from "libs/utils";
import { PepperestContext } from "components/helpers/constant";

const OrderListItemDetails = ({
  status,
  onClick,
  date,
  address,
  orderId,
  cost,
  customerEmail,
  customerName,
}) => (
  <div className="list-item-detail__container">
    <div className={`list-item__indicator ${getIndicatorClass(status)}`} />
    <div className="list-item-detail__header">
      <div
        role="button"
        tabIndex={0}
        className="list-item-detail__container-close"
        onClick={() => {
          onClick(false);
        }}
      >
        Close
      </div>
    </div>
    <div className="list-item-detail__main">
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Order ID</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">{orderId}</p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Customer</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">{customerName}</p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Order Date</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">{date}</p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Total Amount</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">NGN {cost}</p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Customer Email</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            {customerEmail}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Status</p>
        </div>
        <div className="col-md-9 px-0">
          <p
            className={`list-item-detail__main-item__details status-text ${getStatusTextClass(
              status,
            )}`}
          >
            {status}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">
            Delivery Addresss
          </p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">{address}.</p>
        </div>
      </div>
      <div className="list-item-detail__main-item list-item-detail__main-item-alternate row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Items in Order</p>
        </div>
        <div className="col-md-9 px-0">
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
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Payment Method</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">Flutterwave</p>
        </div>
      </div>
      <div className="list-item-detail__main-item">
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
    </div>
  </div>
);

OrderListItemDetails.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default OrderListItemDetails;
