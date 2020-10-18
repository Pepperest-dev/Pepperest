import React, { useState, useEffect } from 'react';
import { withDefaultLayout } from 'components/layouts';
import { WhiteTick, SpinnerIcon, CloseIcon } from 'components/vectors';
import { getStringHash } from 'libs/utils';
import { connect } from "react-redux";
import * as actions from 'store/actions/index';
import Modal from "components/blocks/ViewOrderModal/index"

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: 'Confirmation',
  links: [],
  page: 'checkout',
  isSettings: true,
  navBarTitle: 'Confirmation',
};
const ConfirmationPage = (props) => {
  const [showM, setShow] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(props.location.search)
    const trxref = params.get('trxref')
    const reference = params.get('reference')
    props.confirmOrder(props.token, props.user, {trxref, reference})
  }, [])

  if (props.loading){
    return <SpinnerIcon />
  }
  else if (props.orders == null) {
    return (
      <div className="confirmation">
        <div className="confirmation-content">
          <div className="confirmation-card">
            <div className="confirmation-card-header">
              <div className="confirmation--status">
                <CloseIcon />
              </div>
              <h6 className="text--small text-font--medium">Order Confirmation</h6>
            </div>
            <div className="confirmation-card-body">
              <div className="confirmation-card-body-status">
                <p className="text--smaller text--gray text--center">
                  Unable to Confirm Your Order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
  <div className="confirmation">
    <div className="confirmation-content">
      <div className="confirmation-card">
        <div className="confirmation-card-header">
          <div className="confirmation--status">
            <WhiteTick />
          </div>
          <h6 className="text--small text-font--medium">Order Confirmation</h6>
        </div>
        <div className="confirmation-card-body">
          <div className="confirmation-card-body-status">
            <p className="text--smaller text--gray text--center">
              Your Order has been successfully placed, click order ID to view
              more details
            </p>
          </div>
          <div className="confirmation-card-body-order__content">
            <p className="text--xs text--orange text-font--medium">YOUR ORDER NUMBER IS</p>
            <div className="button button-md button--orange-outline" onClick={() => setShow(true)}>
              {props.orders.order.orderId}
            </div>
          </div>
        </div>
        <div className="confirmation-card-body__base">
          <p className="text--smaller text--gray">
            Your will receive an email shortly, Hope you enjoy the items you
            have chosen.
          </p>
          <div className="confirmation-card-body__base-actions">
            <div className="button button-md button--grey">Continue Shopping</div>
            <div className="button button-md button--grey">My Order</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {showM ?
    <Modal
      close={setShow}
      orders = {props.orders}
      />
    : null}
  </>
)}

const mapStateToProps = (state) => {
  return {
    user: state.auth.userInfo,
    token: state.auth.token,
    loading: state.orders.loading,
    orders: state.orders.confirmOrderDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    confirmOrder: (token, user, extraParams) => dispatch(actions.confirmOrder(token, user, extraParams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withDefaultLayout(ConfirmationPage, config));
