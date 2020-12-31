import React from 'react';
import { ProductIcon, AddIcon, RemoveIcon } from 'components/vectors';
import { connect } from "react-redux";
import * as actions from "store/actions/index";

const CartItem = ({ token, user, error, removeItem, addToCart,
  item: { cart_id, productID, productname, description, deliveryPeriod, price, quantity }}) => {
  const increase = () => addToCart(token, user, productID, 1)
  const decrease = () => {
    if (quantity <= 1){
      removeItem(token, user, cart_id, productID, quantity)
    } else {
      removeItem(token, user, cart_id, productID, 1)
    }
  }
  return (
  <div className="cart-item">
    <div className="row w-100 h-100 mx-0">
      <div className="col-3 col-md-2">
        <div className="cart-item__image-wrapper">
          <ProductIcon />
        </div>
      </div>
      <div className="col-9 col-md-6">
        <div className="d-flex flex-column">
          <h5 className="cart-item__title">{productname}</h5>
          <p className="cart-item__info">{description}</p>
          <p className="text--smallest text--ellipsis mt-auto d-none d-lg-block">
            {deliveryPeriod} Delivery days</p>
        </div>
      </div>
      <div className="col-md-4 d-none d-lg-block">
        <div className="d-flex flex-column align-items-end justify-content-between">
          <p className="merchant-product-card__amount">NGN {price}</p>
          <p className="cart-item__info">
            Quantity: <AddIcon onClick={increase} />{quantity}
            <RemoveIcon onClick={decrease}/>
        </p>


          <div className="button button-md button--orange-outline mt-3"
            style={{marginTop: '0.5rem'}}
            onClick={()=>removeItem(token, user, cart_id, productID, quantity)}>
            Remove Product
          </div>
        </div>
      </div>
    </div>
    <div className="merchant-product-card__mobile-base">
      <div className="d-flex flex-column">
        <p className="merchant-product-card__amount">NGN {price}</p>
        <p className="merchant-product-card__delivery-day">
          {deliveryPeriod} Delivery days</p>
      </div>
      <div className="button button-lg button--orange-outline"
        onClick={()=>removeItem(token, user, cart_id, productID, quantity)} >
        REMOVE ITEM
      </div>
    </div>
  </div>
)};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    error: state.cart.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (token, user, cart_id, productID, quantity) => dispatch(actions.removeItemFromCart(token, user, cart_id, productID, quantity)),
    addToCart: (token, user, productID, quantity) => dispatch(actions.addToCart(token, user, productID, quantity)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
