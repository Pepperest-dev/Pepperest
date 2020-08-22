import React from 'react';
import { ProductIcon } from 'components/vectors';

const CartItem = ({item: { productname, description, deliveryPeriod, price }}) => (
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
          <p className="text--smallest text--ellipsis mt-auto d-none d-lg-block">{deliveryPeriod} Delivery days</p>
        </div>
      </div>
      <div className="col-md-4 d-none d-lg-block">
        <div className="d-flex flex-column align-items-end justify-content-between">
          <p className="merchant-product-card__amount">NGN {price}</p>
          <div className="button button-md button--orange-outline mt-3">Remove Product</div>
        </div>
      </div>
    </div>
    <div className="merchant-product-card__mobile-base">
      <div className="d-flex flex-column">
        <p className="merchant-product-card__amount">NGN 18,500</p>
        <p className="merchant-product-card__delivery-day">{deliveryPeriod} Delivery days</p>
      </div>
      <div className="button button-lg button--orange-outline">REMOVE ITEM</div>
    </div>
  </div>
);

export default CartItem;
