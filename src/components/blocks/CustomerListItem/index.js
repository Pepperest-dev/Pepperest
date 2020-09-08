/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  getStatusTextClass,
  getIndicatorClass,
  getStatusTagClass,
  getStatusText,
} from 'libs/utils';
import { CustomerListItemDetails } from 'components/blocks';
import { PepperestContext } from 'components/helpers/constant';


const CustomerListItem = ({
  status, recentTransactions, phone, customerEmail, customerName, totalSpent, totalTransactions,paymentName,
}) => {
  const [isListDetailsOpen, setListDetailsOpen] = useState(false);
  const pepperestContext = useContext(PepperestContext);
  const updateListDetailsOpen = (value) => setListDetailsOpen(value);
  const handleListClick = () => {
    pepperestContext.updateShowCustomerListModal(true,
      {status, recentTransactions, phone, totalSpent, totalTransactions,
        customerEmail, customerName, updateListDetailsOpen});
    updateListDetailsOpen(!isListDetailsOpen);
  };

  return (
    <>
      <div className="list-item row mx-0" onClick={() => { handleListClick(); }}>
        <div
          className={`list-item__indicator ${getIndicatorClass(status)}`}
        />
        <div className="col-4 col-md-4 px-0 d-none d-lg-flex">
          <div className="d-flex flex-row">
            <div className="list-item__date">
              <p className="list-item__date-text">{phone}</p>
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
        <div className="list-item__details col-12 col-md-4 px-0">
          <div className="list-item__details-container">
            <p className="list-item__details-product">{paymentName}</p>
            <p className="list-item__details-email">{customerEmail}</p>
          </div>
        </div>
        <div className="col-2 col-md-4 px-0">
          <div className="d-flex flex-row justify-content-end">
            <div
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
        <CustomerListItemDetails
          status={status}
          recentTransactions={recentTransactions}
          phone={phone}
          totalSpent={totalSpent}
          totalTransactions={totalTransactions}
          customerEmail={customerEmail}
          customerName={customerName}
          onClick={updateListDetailsOpen}
        />
      ) : null}
    </>
  );
};

CustomerListItem.propTypes = {
  status: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  paymentName: PropTypes.string.isRequired,
  customerEmail: PropTypes.string.isRequired,
  totalTransactions: PropTypes.number.isRequired,
  totalSpent: PropTypes.number.isRequired,
  recentTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      posting_date: PropTypes.string.isRequired,
      trans_status: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CustomerListItem;
