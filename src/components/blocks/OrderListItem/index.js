/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { OrderListItemDetails } from "components/blocks";
import { PepperestContext } from "components/helpers/constant";

import {
  getStatusTextClass,
  getIndicatorClass,
  getStatusTagClass,
  getStatusText,
} from "libs/utils";

const OrderListItem = ({
  status,
  date,
  address,
  orderId,
  cost,
  customerEmail,
  customerName,
}) => {
  const [isListDetailsOpen, setListDetailsOpen] = useState(false);
  const updateListDetailsOpen = (value) => setListDetailsOpen(value);
  const pepperestContext = useContext(PepperestContext);
  const handleListClick = () => {
    pepperestContext.updateShowOrdersListModal(true);
    updateListDetailsOpen(!isListDetailsOpen);
  };

  return (
    <>
      <div
        className="list-item row mx-0"
        onClick={() => {
          handleListClick();
        }}
      >
        <div className={`list-item__indicator ${getIndicatorClass(status)}`} />
        <div className="col-2 col-md-4 px-0">
          <div className="d-flex flex-row">
            <div className="list-item__date">
              <p className="list-item__date-text">{date}</p>
            </div>
            <div className="list-item__status">
              <div className="list-item__status-container">
                <div
                  className={`list-item__status-tag ${getStatusTagClass(
                    status,
                  )} ${getStatusTextClass(status)}`}
                >
                  {getStatusText(status)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 list-item__details col-md-5 px-0">
          <div className="list-item__details-container">
            <p className="list-item__details-product list-item__details-product__alt">
              {orderId}
            </p>
            <p className="list-item__details-email list-item__details-email__alt">
              {address}
            </p>
          </div>
        </div>
        <div className="col-4 col-md-3 px-0">
          <div className="d-flex flex-row justify-content-end">
            <div className="list-item__payment">
              <div className="list-item__payment-container">
                <p className="list-item__payment-price">
                  NGN
                  {cost}
                </p>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="list-item__more"
              onClick={() => {
                setListDetailsOpen(true);
              }}
            >
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
        </div>
      </div>
      {isListDetailsOpen ? (
        <OrderListItemDetails
          onClick={updateListDetailsOpen}
          date={date}
          address={address}
          orderId={orderId}
          cost={cost}
          customerEmail={customerEmail}
          customerName={customerName}
          status={status}
        />
      ) : null}
    </>
  );
};

OrderListItem.propTypes = {
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  orderId: PropTypes.any.isRequired,
  cost: PropTypes.any.isRequired,
};

export default OrderListItem;
