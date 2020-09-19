/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useContext, useEffect} from "react";
import { withDefaultLayout } from "components/layouts";
import {
  AddNewAddressModal,
  EditAddressModal,
  RemoveAddressModal,
} from "components/blocks";
import { getStringHash } from "libs/utils";
import { LockIcon } from "components/vectors";
import { PepperestContext } from "components/helpers/constant";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import * as actions from 'store/actions/index';

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: "Secure Checkout",
  links: [],
  page: "checkout",
  isSettings: true,
  navBarTitle: "Secure Checkout",
};
const CheckoutPage = (props) => {
  const context = useContext(PepperestContext)
  const {
    history, user, token, cart, onLoadCart
  } = props
  console.log(props);
  useEffect(() => {
    if (!props.loaded && !props.loading) {
      onLoadCart(token, user);
    }
  },[])
  return (
  <>
    <div className="checkout">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="pcard">
            <div
              className="button button--orange button-md button-mid"
              onClick={() => {
                context.updateShowAddNewAddressModal(true);
              }}
              >
              Add New Address
            </div>
            <div className="main-header">
              <div className="text--smaller text-font--medium address-header">
                My Address
              </div>
            </div>
            <div className="main-content">
              <div className="flex-content">
                <div className="flex-content_child">
                  <label className="radio-container">
                    <input type="radio" checked="checked" name="radio" />
                    <span className="radio-checkmark"></span>
                  </label>
                  <p className="text--smaller text--gray ml-10">
                    30 Akinola street, yaba, Lagos
                  </p>
                </div>
                <div className="space-between">
                  <div
                    className="button button-rounded"
                    onClick={() => {
                      context.updateShowEditAddressModal(true);
                    }}
                    >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M1.125 14.625H16.875V15.75H1.125V14.625Z"
                        fill="#777777"
                        />
                      <path
                        d="M14.2875 5.0625C14.7375 4.6125 14.7375 3.9375 14.2875 3.4875L12.2625 1.4625C11.8125 1.0125 11.1375 1.0125 10.6875 1.4625L2.25 9.9V13.5H5.85L14.2875 5.0625ZM11.475 2.25L13.5 4.275L11.8125 5.9625L9.7875 3.9375L11.475 2.25ZM3.375 12.375V10.35L9 4.725L11.025 6.75L5.4 12.375H3.375Z"
                        fill="#777777"
                        />
                    </svg>
                  </div>
                  <div
                    className="button button-rounded"
                    onClick={() => {
                      context.updateShowRemoveAddressModal(true);
                    }}
                    >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M13.2359 18H2.77989C2.55978 17.9949 2.34285 17.9472 2.1415 17.8596C1.94015 17.772 1.75832 17.6463 1.6064 17.4896C1.45448 17.3329 1.33545 17.1483 1.2561 16.9463C1.17676 16.7443 1.13866 16.529 1.14398 16.3125V5.19189H2.28797V16.3125C2.28251 16.3813 2.29092 16.4504 2.31272 16.5159C2.33452 16.5814 2.36928 16.6421 2.41499 16.6944C2.46071 16.7466 2.51648 16.7895 2.5791 16.8205C2.64172 16.8515 2.70996 16.87 2.77989 16.875H13.2359C13.3059 16.87 13.3741 16.8515 13.4367 16.8205C13.4994 16.7895 13.5551 16.7466 13.6008 16.6944C13.6466 16.6421 13.6813 16.5814 13.7031 16.5159C13.7249 16.4504 13.7333 16.3813 13.7279 16.3125V5.19189H14.8718V16.3125C14.8772 16.529 14.8391 16.7443 14.7597 16.9463C14.6804 17.1483 14.5613 17.3329 14.4094 17.4896C14.2575 17.6463 14.0757 17.772 13.8743 17.8596C13.673 17.9472 13.456 17.9949 13.2359 18V18Z"
                        fill="#777777"
                        />
                      <path
                        d="M15.318 3.9375H0.571994C0.420292 3.9375 0.274803 3.87824 0.167533 3.77275C0.0602636 3.66726 0 3.52418 0 3.375C0 3.22582 0.0602636 3.08274 0.167533 2.97725C0.274803 2.87176 0.420292 2.8125 0.571994 2.8125H15.318C15.4697 2.8125 15.6152 2.87176 15.7225 2.97725C15.8297 3.08274 15.89 3.22582 15.89 3.375C15.89 3.52418 15.8297 3.66726 15.7225 3.77275C15.6152 3.87824 15.4697 3.9375 15.318 3.9375Z"
                        fill="#777777"
                        />
                      <path
                        d="M9.72388 6.1875H10.8679V14.625H9.72388V6.1875Z"
                        fill="#777777"
                        />
                      <path
                        d="M5.14795 6.1875H6.29194V14.625H5.14795V6.1875Z"
                        fill="#777777"
                        />
                      <path
                        d="M10.8679 2.17125H9.7811V1.125H6.23474V2.17125H5.14795V1.125C5.14758 0.836127 5.26023 0.558184 5.46255 0.34875C5.66487 0.139316 5.94136 0.0144435 6.23474 0H9.7811C10.0745 0.0144435 10.351 0.139316 10.5533 0.34875C10.7556 0.558184 10.8683 0.836127 10.8679 1.125V2.17125Z"
                        fill="#777777"
                        />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-content">
                <div className="flex-content_child">
                  <label className="radio-container">
                    <input type="radio" name="radio" />
                    <span className="radio-checkmark"></span>
                  </label>
                  <p className="text--smaller text--gray ml-10">
                    30 Akinola street, yaba, Lagos
                  </p>
                </div>
                <div className="space-between">
                  <div
                    className="button button-rounded"
                    onClick={() => {
                      context.updateShowEditAddressModal(true);
                    }}
                    >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M1.125 14.625H16.875V15.75H1.125V14.625Z"
                        fill="#777777"
                        />
                      <path
                        d="M14.2875 5.0625C14.7375 4.6125 14.7375 3.9375 14.2875 3.4875L12.2625 1.4625C11.8125 1.0125 11.1375 1.0125 10.6875 1.4625L2.25 9.9V13.5H5.85L14.2875 5.0625ZM11.475 2.25L13.5 4.275L11.8125 5.9625L9.7875 3.9375L11.475 2.25ZM3.375 12.375V10.35L9 4.725L11.025 6.75L5.4 12.375H3.375Z"
                        fill="#777777"
                        />
                    </svg>
                  </div>
                  <div
                    className="button button-rounded"
                    onClick={() => {
                      context.updateShowRemoveAddressModal(true);
                    }}
                    >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M13.2359 18H2.77989C2.55978 17.9949 2.34285 17.9472 2.1415 17.8596C1.94015 17.772 1.75832 17.6463 1.6064 17.4896C1.45448 17.3329 1.33545 17.1483 1.2561 16.9463C1.17676 16.7443 1.13866 16.529 1.14398 16.3125V5.19189H2.28797V16.3125C2.28251 16.3813 2.29092 16.4504 2.31272 16.5159C2.33452 16.5814 2.36928 16.6421 2.41499 16.6944C2.46071 16.7466 2.51648 16.7895 2.5791 16.8205C2.64172 16.8515 2.70996 16.87 2.77989 16.875H13.2359C13.3059 16.87 13.3741 16.8515 13.4367 16.8205C13.4994 16.7895 13.5551 16.7466 13.6008 16.6944C13.6466 16.6421 13.6813 16.5814 13.7031 16.5159C13.7249 16.4504 13.7333 16.3813 13.7279 16.3125V5.19189H14.8718V16.3125C14.8772 16.529 14.8391 16.7443 14.7597 16.9463C14.6804 17.1483 14.5613 17.3329 14.4094 17.4896C14.2575 17.6463 14.0757 17.772 13.8743 17.8596C13.673 17.9472 13.456 17.9949 13.2359 18V18Z"
                        fill="#777777"
                        />
                      <path
                        d="M15.318 3.9375H0.571994C0.420292 3.9375 0.274803 3.87824 0.167533 3.77275C0.0602636 3.66726 0 3.52418 0 3.375C0 3.22582 0.0602636 3.08274 0.167533 2.97725C0.274803 2.87176 0.420292 2.8125 0.571994 2.8125H15.318C15.4697 2.8125 15.6152 2.87176 15.7225 2.97725C15.8297 3.08274 15.89 3.22582 15.89 3.375C15.89 3.52418 15.8297 3.66726 15.7225 3.77275C15.6152 3.87824 15.4697 3.9375 15.318 3.9375Z"
                        fill="#777777"
                        />
                      <path
                        d="M9.72388 6.1875H10.8679V14.625H9.72388V6.1875Z"
                        fill="#777777"
                        />
                      <path
                        d="M5.14795 6.1875H6.29194V14.625H5.14795V6.1875Z"
                        fill="#777777"
                        />
                      <path
                        d="M10.8679 2.17125H9.7811V1.125H6.23474V2.17125H5.14795V1.125C5.14758 0.836127 5.26023 0.558184 5.46255 0.34875C5.66487 0.139316 5.94136 0.0144435 6.23474 0H9.7811C10.0745 0.0144435 10.351 0.139316 10.5533 0.34875C10.7556 0.558184 10.8683 0.836127 10.8679 1.125V2.17125Z"
                        fill="#777777"
                        />
                    </svg>
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
              <p className="text--smaller">{cart?.items_count}</p>
            </div>
            <div className="">
              { cart && cart.items.map((item) => (
                <div className="checkout-item" key={getStringHash()}>
                  <div className="checkout-item-image__wrapper">
                    <img
                      className="checkout-item-image"
                      src="assets/images/product.jpeg"
                      alt="product"
                      />
                  </div>
                  <div className="checkout-item-content">
                    <h6 className="checkout-item-content__title text--smaller">
                      {item.productname}
                    </h6>
                    <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                      <p className="text--smaller text-font--medium">
                        NGN {item.price}
                      </p>
                      <p className="text--smallest text--orange">
                        {item.deliveryPeriod} Delivery days
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-summary-base">
              <h5 className="text--md text--silver text-font--medium text--bold">
                Total:
              </h5>

              <p className="text--md text--bold text-font--medium">
                NGN {cart?.total_sum}
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
    {context.state.showAddNewAddressModal ? <AddNewAddressModal /> : null}
    {context.state.showEditAddressModal ? <EditAddressModal /> : null}
    {context.state.showRemoveAddressModal ? <RemoveAddressModal /> : null}
  </>
)}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    loading: state.cart.loading,
    loaded: state.cart.loaded,
    cart: state.cart.cart,
    error: state.cart.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadCart: (token, user) => dispatch(actions.loadCustomerCart(token, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withDefaultLayout(CheckoutPage, config));


// export default withDefaultLayout(CheckoutPage, config);
