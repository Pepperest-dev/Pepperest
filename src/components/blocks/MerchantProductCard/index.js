import React from 'react';
import { ProductIcon } from 'components/vectors';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as actions from 'store/actions/index';
import { useHistory } from "react-router-dom";

const MerchantProductCard = (props) => {
  const {
    user, token, addToCart,
    item: {
      id, productName, dateCreated,
      transactions, deliveryDate, amount, productDescription
    }
  } = props
  const history = useHistory()
  const add = () => {
    if (user && token) {
      addToCart(token, user, id)
    }
    else {
      window.localStorage.setItem('product', id)
      history.push('/login')
    }
  }
  return (
  <div className="merchant-product-card">
    <div className="merchant-product-card__top">
      <div className="merchant-product-card__image-wrapper">
        <ProductIcon />
      </div>
      <div className="merchant-product-card__details">
        <h5 className="merchant-product-card__title">
        {productName}
        </h5>
        <p className="merchant-product-card__info">
        {productDescription}
        </p>
        <div className="merchant-product-card__details__base">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <p className="merchant-product-card__amount">N{' '} {amount}</p>
            <p className="merchant-product-card__delivery-day">
            {deliveryDate}
            </p>
          </div>
          <button onClick={add} className="button button-lg button--orange-outline">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
    <div className="merchant-product-card__mobile-base">
      <div className="d-flex flex-column">
        <p className="merchant-product-card__amount">N{' '} {amount}</p>
        <p className="merchant-product-card__delivery-day">{deliveryDate}</p>
      </div>
      <button onClick={add} className="button button-lg button--orange-outline">ADD TO CART</button>
    </div>
  </div>
)};

const mapStateToProps = (state, {item}) => {
  return {
    user: state.auth.userInfo,
    token: state.auth.token,
    item: item
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (token, user, productID) => dispatch(actions.addToCart(token, user, productID)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MerchantProductCard);
