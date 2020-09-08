/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState, useEffect } from "react";
import { PepperestContext } from "components/helpers/constant";
import useResizeObserver from "components/customHook/useResizeObserver";
import { getStringHash } from 'libs/utils';

const CustomerListItemDetailMobileModal = ({customerDetails :{status, recentTransactions, phone, totalSpent, totalTransactions,
  customerEmail, customerName, updateListDetailsOpen}}) => {
  const pepperestContext = useContext(PepperestContext);
  const [state, setState] = useState({
    isRecentTransactionActive: false,
    style: {},
  });
  const [ref, { contentRect }] = useResizeObserver();
  
  useEffect(() => {
    if (contentRect) {
      setState({
        ...state,
        style: {
          top:
            contentRect.height >= window.innerHeight - 350 ? "350px" : "unset",
          bottom:
            contentRect.height >= window.innerHeight - 350 ? "unset" : "0",
          // minHeight:
          //   contentRect.height >= window.innerHeight - 350 ? 'unset' : '500px',
        },
      });
    }
  }, [contentRect]);

  const handleToggle = () => {
    setState({
      ...state,
      isRecentTransactionActive: !state.isRecentTransactionActive,
    });
  };

  return (
    <>
      <div className="list-modal-overlay" />
      <div
        className="list-modal"
        onClick={() => {
          pepperestContext.updateShowCustomerListModal(false);
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
          <div className="list-modal__header py-0">
            <h4
              className={`list-modal__header-label ${
                !state.isRecentTransactionActive ? "active" : ""
              }`}
              onClick={() => {
                handleToggle();
              }}
            >
              Customer Info
            </h4>
            <h4
              className={`list-modal__header-label ${
                state.isRecentTransactionActive ? "active" : ""
              }`}
              onClick={() => {
                handleToggle();
              }}
            >
              Recent Transactions
            </h4>
          </div>
          <ul className="list-modal__list">
            {!state.isRecentTransactionActive ? (
              <>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Full Name
                  </p>
                  <p className="list-item-detail__main-item__details">
                    {customerName}
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Email Address
                  </p>
                  <p className="list-item-detail__main-item__details">
                    {customerEmail}
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Phone Number
                  </p>
                  <p className="list-item-detail__main-item__details">
                    {phone}
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Total Transactions
                  </p>
                  <p className="list-item-detail__main-item__details">
                    {totalTransactions}
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Total Spent
                  </p>
                  <p className="list-item-detail__main-item__details">
                    {totalSpent}
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">Status</p>
                  <p className="list-item-detail__main-item__details list-item__status-text text--active">
                    {status}
                  </p>
                </li>
                <div className="list-modal__list-item list-modal__list-item__alternate">
                  {/* <div className="button button-md button--grey">
                    Edit Customer
                  </div> */}
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
                </div>
              </>
            ) : (
              <>

              {recentTransactions.length > 0 && recentTransactions.map((item) => (
                <li key={getStringHash()} className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    {item.amount}
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--initial text--initial">
                      {item.trans_status}
                    </div>
                  </div>
                </li>
              ))}

                {/* <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                      Awaiting Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--fulfilled text--fulfilled">
                      Fulfilled
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--initial text--initial">
                      Initial Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--initial text--initial">
                      Initial Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                      Awaiting Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                      Awaiting Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                      Awaiting Payment
                    </div>
                  </div>
                </li> */}
                <div className="list-modal__list-item list-modal__list-item__alternate">
                  <div className="button button-md button--grey">
                    View All Transactions
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomerListItemDetailMobileModal;
