/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from 'store/actions/index';

const CommonHeader = ({ history, showCart, commonHeaderTitle, cart }) => (
  <div className="nsHeader-alternate">
    <div className="nsHeader-main">
      <h4 className="nsHeader-main-title">{commonHeaderTitle}</h4>
      {
          showCart ? (
            <div role="button" tabIndex="0" className="button button-md button--orange d-flex flex-row" onClick={() => { history.push('/cart'); }}>
              My Cart
              {cart != null ? <div className="mBadge-alt">{cart?.items_count}</div>: ''}
            </div>
          ) : null
      }
    </div>
  </div>
);

CommonHeader.defaultProps = {
  showCart: false,
};

CommonHeader.propTypes = {
  showCart: PropTypes.bool,
  commonHeaderTitle: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps)(withRouter(CommonHeader))
