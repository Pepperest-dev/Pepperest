import React from 'react';
import { ProductIcon } from 'components/vectors';
import PropTypes from 'prop-types';

const MerchantProductCard = ({productID, productName, dateCreated, transactions, deliveryDate, amount, productDescription,}) => (
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
          <button onClick={() =>{}} className="button button-lg button--orange-outline">
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
      <button onClick={() =>{}} className="button button-lg button--orange-outline">ADD TO CART</button>
    </div>
  </div>
);

export default MerchantProductCard;
