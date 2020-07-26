/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { withDefaultLayout } from "components/layouts";
import { RemoveAddressModal } from "components/blocks";
import { getStringHash } from "libs/utils";
import { LockIcon } from "components/vectors";
import { PepperestContext } from "components/helpers/constant";

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: "Confirm Checkout",
  links: [],
  page: "confirmcheckout",
  isSettings: true,
  navBarTitle: "Confirm Checkout",
};
const ConfirmCheckoutPage = ({ history }) => (
  <>
    <div className="checkout">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="pcard">
            <div className="main-content">
              <div className="main-content-card">
                <div className="text-font--medium address-header mb-20">
                  Confirm Checkout
                </div>
                <div className="flex-checkout">
                  <span>Total Cost</span>
                  <span className="payable-value">N2,00000</span>
                </div>
                <div className="flex-checkout">
                  <span>Delivery Cost</span>
                  <span className="payable-value">N2,00000</span>
                </div>
                <div className="flex-checkout">
                  <span>Pepperest Fee</span>
                  <span className="payable-value">N2,00000</span>
                </div>
                <div className="flex-checkout">
                  <span className="payable-amount">Total Payable Amount</span>
                  <span className="payable-value">N2,00000</span>
                </div>
                <h6 className="mt-25">Payment Options</h6>
                <div className="mt-20 payment-options">
                  <div className="button button-lg button--orange-outline">
                    Pay with Paystack
                  </div>
                  <div className="button button-lg button--orange-outline">
                    Pay with Flutterwave
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto mt-lg-4 mb-3 mb-lg-0">
              <div
                className="button button-lg button--orange"
                onClick={() => {
                  history.push("/confirm");
                }}
              >
                PLACE ORDER
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="pcard checkout-summary">
            <div className="pcard-header">
              <h6 className="checkout-item-content__title text--smaller text-font--medium">
                My Order Summary
              </h6>
              <p className="text--smaller">8 Items</p>
            </div>
            <div className="">
              <div className="checkout-item">
                <div className="checkout-item-image__wrapper">
                  <img
                    className="checkout-item-image"
                    src="assets/images/product.jpeg"
                    alt="product"
                  />
                </div>
                <div className="checkout-item-content">
                  <h6 className="checkout-item-content__title text--smaller">
                    Iya Remi Ina Ankara with two lace Payment Iya Remi Ina
                    Ankara with two lace Payment Iya Remi Ina Ankara with two
                    lace Payment Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                    <p className="text--smaller text-font--medium">
                      NGN 18,500
                    </p>
                    <p className="text--smallest text--orange">
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className="checkout-item">
                <div className="checkout-item-image__wrapper">
                  <img
                    className="checkout-item-image"
                    src="assets/images/product.jpeg"
                    alt="product"
                  />
                </div>
                <div className="checkout-item-content">
                  <h6 className="checkout-item-content__title text--smaller">
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                    <p className="text--smaller text-font--medium">
                      NGN 18,500
                    </p>
                    <p className="text--smallest text--orange">
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className="checkout-item">
                <div className="checkout-item-image__wrapper">
                  <img
                    className="checkout-item-image"
                    src="assets/images/product.jpeg"
                    alt="product"
                  />
                </div>
                <div className="checkout-item-content">
                  <h6 className="checkout-item-content__title text--smaller">
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                    <p className="text--smaller text-font--medium">
                      NGN 18,500
                    </p>
                    <p className="text--smallest text--orange">
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className="checkout-item">
                <div className="checkout-item-image__wrapper">
                  <img
                    className="checkout-item-image"
                    src="assets/images/product.jpeg"
                    alt="product"
                  />
                </div>
                <div className="checkout-item-content">
                  <h6 className="checkout-item-content__title text--smaller">
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                    <p className="text--smaller text-font--medium">
                      NGN 18,500
                    </p>
                    <p className="text--smallest text--orange">
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className="checkout-item">
                <div className="checkout-item-image__wrapper">
                  <img
                    className="checkout-item-image"
                    src="assets/images/product.jpeg"
                    alt="product"
                  />
                </div>
                <div className="checkout-item-content">
                  <h6 className="checkout-item-content__title text--smaller">
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                    <p className="text--smaller text-font--medium">
                      NGN 18,500
                    </p>
                    <p className="text--smallest text--orange">
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className="checkout-item">
                <div className="checkout-item-image__wrapper">
                  <img
                    className="checkout-item-image"
                    src="assets/images/product.jpeg"
                    alt="product"
                  />
                </div>
                <div className="checkout-item-content">
                  <h6 className="checkout-item-content__title text--smaller">
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                    <p className="text--smaller text-font--medium">
                      NGN 18,500
                    </p>
                    <p className="text--smallest text--orange">
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-summary-base">
              <h5 className="text--md text--silver text-font--medium text--bold">
                Total:
              </h5>

              <p className="text--md text--bold text-font--medium">
                NGN 108,500
              </p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <LockIcon />
            <p className="text--small text--silver text-font--medium text--bold ml-2">
              Secure Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
    <PepperestContext.Consumer>
      {(context) =>
        context.state.showRemoveAddressModal ? <RemoveAddressModal /> : null
      }
    </PepperestContext.Consumer>
  </>
);

export default withDefaultLayout(ConfirmCheckoutPage, config);
