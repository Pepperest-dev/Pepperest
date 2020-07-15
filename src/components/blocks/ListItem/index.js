/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ListItemDetails } from "components/blocks";
import {
  getStatusTextClass,
  getIndicatorClass,
  getStatusTagClass,
  getStatusText,
} from "libs/utils";

import { PepperestContext } from "components/helpers/constant";

const ListItem = ({
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
}) => {
  const pepperestContext = useContext(PepperestContext);
  const [isListDetailsOpen, setListDetailsOpen] = useState(false);
  const updateListDetailsOpen = (value) => setListDetailsOpen(value);
  const handleListClick = () => {
    pepperestContext.updateShowPaymentListModal(true);
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
                {status.toLowerCase() === "pending" ? (
                  <p
                    className={`list-item__status-text ${getStatusTextClass(
                      status,
                    )}`}
                  >
                    {statusText.substring(statusText.indexOf(" ") + 1)}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 list-item__details col-md-4 px-0">
          <div className="list-item__details-container">
            <p className="list-item__details-product">{paymentName}</p>
            <p className="list-item__details-email">{customerName}</p>
          </div>
        </div>
        <div className="col-4 col-md-4 px-0">
          <div className="d-flex flex-row justify-content-end">
            <div className="list-item__payment">
              <div className="list-item__payment-container">
                {status.toLowerCase() === "pending" ? (
                  <div className="button button-md button--orange">
                    Make Payment
                  </div>
                ) : null}
                <p className="list-item__payment-price">
                  NGN
                  {amount}
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
        <ListItemDetails
          status={status}
          statusText={statusText}
          transactionId={transactionId}
          transactionDatetime={transactionDatetime}
          amount={amount}
          customerEmail={customerEmail}
          customerName={customerName}
          paymentDescription={paymentDescription}
          paymentName={paymentName}
          deliveryDatetime={deliveryDatetime}
          onClick={updateListDetailsOpen}
        />
      ) : null}
    </>
  );
};

ListItem.propTypes = {
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
  transactionId: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  transactionDatetime: PropTypes.string.isRequired,
  paymentName: PropTypes.string.isRequired,
  deliveryDatetime: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  customerEmail: PropTypes.string.isRequired,
  paymentDescription: PropTypes.string.isRequired,
};

export default ListItem;
