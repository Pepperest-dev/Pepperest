import React from 'react'
import PropTypes from 'prop-types'

import {LeftChevron } from 'components/vectors';

const InstagramBusinessProductsSelect = props => {
    return (
      <div className="instagram-page__main instagram-page__main--alt">
          <div className="instagram-page__main--header instagram-page__main--header-alt">
            <div className="instagram-page__main--control">
              <LeftChevron />
              <p className="text--smallest text--gray">Back</p>
            </div>
            <p className="mx-auto">Instagram A</p>
          </div>
          <ul className="instagram-page__main-list">
            <div className="instagram-page__main-list-item">
              <div className="input-control">
                <input type="checkbox" id="product1" name="instagram" />
                <label htmlFor="product1"></label>
              </div>
              <img
                className="instagram-page__main-list-item__avatar"
                src="/assets/images/avatar.jpg"
                alt="product"
              />
              <p className="text--smallest text--gray">
                HP Notebook 15-RB000NIA
              </p>
            </div>
            <div className="instagram-page__main-list-item">
              <div className="input-control">
                <input type="checkbox" id="product2" name="instagram" />
                <label htmlFor="product2"></label>
              </div>
              <img
                className="instagram-page__main-list-item__avatar"
                src="/assets/images/avatar.jpg"
                alt="product"
              />
              <p className="text--smallest text--gray">
                HP Notebook 15-RB000NIA
              </p>
            </div>
            <div className="instagram-page__main-list-item">
              <div className="input-control">
                <input type="checkbox" id="product3" name="instagram" />
                <label htmlFor="product3"></label>
              </div>
              <img
                className="instagram-page__main-list-item__avatar"
                src="/assets/images/avatar.jpg"
                alt="product"
              />
              <p className="text--smallest text--gray">
                HP Notebook 15-RB000NIA
              </p>
            </div>
            <div className="instagram-page__main-list-item active">
              <div className="input-control">
                <input type="checkbox" id="product4" name="instagram" checked />
                <label htmlFor="product4"></label>
              </div>
              <img
                className="instagram-page__main-list-item__avatar"
                src="/assets/images/avatar.jpg"
                alt="product"
              />
              <p className="text--smallest text--gray">
                HP Notebook 15-RB000NIA
              </p>
            </div>
            <div className="instagram-page__main-list-item">
              <div className="input-control">
                <input type="checkbox" id="product5" name="instagram" />
                <label htmlFor="product5"></label>
              </div>
              <img
                className="instagram-page__main-list-item__avatar"
                src="/assets/images/avatar.jpg"
                alt="product"
              />
              <p className="text--smallest text--gray">
                HP Notebook 15-RB000NIA
              </p>
            </div>
            <div className="instagram-page__main-list-item">
              <div className="list-footer__pagination">
                <span className="list-footer__pagination-prev list-footer-text">
                  Previous
                </span>
                <ul className="d-flex flex-row">
                  <li className="list-footer__pagination-page-number list-footer-text">
                    1
                  </li>
                  <li className="list-footer__pagination-page-number list-footer-text">
                    2
                  </li>
                  <li className="list-footer__pagination-page-number list-footer-text">
                    3
                  </li>
                  <li className="list-footer__pagination-page-number list-footer-text list-footer-text-alt">
                    4
                  </li>
                </ul>
                <span className="list-footer__pagination-next list-footer-text list-footer-text-alt">
                  Next
                </span>
              </div>
            </div>
          </ul>
          <div className="instagram-page__main--footer">
            <div className="button button-md button--neutral">CANCEL</div>
            <div className="button button-md button--orange" onClick={()=> {props.onClick(false)}}>
              PUBLISH PRODUCTS
            </div>
          </div>
        </div>
    );
}


InstagramBusinessProductsSelect.propTypes = {
  onClick: PropTypes.func
};


export default InstagramBusinessProductsSelect;