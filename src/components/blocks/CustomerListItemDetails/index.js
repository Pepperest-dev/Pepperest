/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment, useState } from "react";
import { getIndicatorClass, getStringHash } from "libs/utils";
import { CustomerInfo, CustomerRecentTransaction } from "components/blocks";

import { PepperestContext } from "components/helpers/constant";

import PropTypes from "prop-types";

const CustomerListItemDetails = ({
  status,
  recentTransactions,
  totalTransactions,
  phone,
  customerEmail,
  customerName,
  totalSpent,
  onClick,
}) => {
  const [showCustomerInfo, setShowCustomerInfo] = useState(true);
  return (
    <div className="list-item-detail__container">
      <div className={`list-item__indicator ${getIndicatorClass(status)}`} />
      <div className="list-item-detail__header">
        <ul className="list-item-detail__header-menu">
          <li
            className={`list-item-detail__header-menu__item ${
              showCustomerInfo ? "active" : ""
            }`}
            onClick={() => {
              setShowCustomerInfo(true);
            }}
          >
            Customer Info
          </li>
          <li
            className={`list-item-detail__header-menu__item ${
              !showCustomerInfo ? "active" : ""
            }`}
            onClick={() => {
              setShowCustomerInfo(false);
            }}
          >
            Recent Transactions
          </li>
        </ul>
        <div
          className="list-item-detail__container-close"
          onClick={() => {
            onClick(false);
          }}
        >
          Close
        </div>
      </div>
      <div className="list-item-detail__main">
        {showCustomerInfo ? (
          <CustomerInfo
            customerName={customerName}
            customerEmail={customerEmail}
            phone={phone}
            totalTransaction={totalTransactions}
            totalSpent={totalSpent}
            status={status}
          />
        ) : (
          recentTransactions &&
          recentTransactions.map((transaction, index) => (
            <CustomerRecentTransaction
              key={getStringHash(index)}
              amount={transaction.amount}
              status={transaction.trans_status}
              datetime={transaction.posting_date}
            />
          ))
        )}

        <div className="list-item-detail__main-item">
          {showCustomerInfo ? (
            <>
              {/* <div className="button button-md button--grey">Edit Customer</div> */}
              <PepperestContext.Consumer>
                {(context) => (
                  <div
                    role="presentation"
                    className="button button-md button--grey"
                    onClick={() => {
                      context.updateShowBlockCustomerModal(true);
                    }}
                  >
                    Block Customer
                  </div>
                )}
              </PepperestContext.Consumer>
            </>
          ) : (
            <div className="button button-md button--grey">
              View All Transactions
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CustomerListItemDetails.propTypes = {
  status: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  customerEmail: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  totalTransactions: PropTypes.number.isRequired,
  recentTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      posting_date: PropTypes.string.isRequired,
      trans_status: PropTypes.string.isRequired,
    }),
  ).isRequired,
  totalSpent: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomerListItemDetails;
