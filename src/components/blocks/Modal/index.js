/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  RightChevron,
  CalendarIcon,
  SpinnerIcon,
} from "components/vectors";
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea,
} from "components/blocks";
import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";


const Modal = (props) => (
  <>
    <div className="pModal-overlay" />
    <div className="pModal">
      <div className="pModal-content">
        <div className="pModal-header">
          <h6 className="text--small">Create Invoice</h6>
          <PepperestContext.Consumer>
            {(context) => (
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  context.updateShowPaymentModal(false);
                }}
              >
                <CloseIcon />
              </div>
            )}
          </PepperestContext.Consumer>
        </div>
        <div className="pModal-sub__header row mx-0">
          <div className="col-12 col-lg-6 px-0">
            <div className="pModal-sub__header-half left">
              <h6 className="text--smaller text--gray">Address</h6>
              <p className="text--smaller">No 21, Yemi Adenuga street, Yaba, Lagos State 10011</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 px-0">
            <div className="pModal-sub__header-half right">
            <h6 className="text--smaller text--gray">Phone</h6>
              <p className="text--smaller">657-36363-366262</p>
              <h6 className="text--smaller text--gray">email</h6>
              <p className="text--smaller">email@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="pModal-sub__header row mx-0">
          <div className="col-12 col-lg-6 px-0">
            <div className="pModal-sub__header-half left">
              <h6 className="text--smaller text--gray">Total Amount</h6>
              <p className="text--smaller">NGN 41,3000</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 px-0">
            <div className="pModal-sub__header-half right">
              <h6 className="text--smaller text--gray">Pepperest Fee</h6>
              <p className="text--smaller">NGN 1,100.10</p>
            </div>
          </div>
        </div>


        <div className="pModal-main">
          <div className="pModal-main__notification text--smallest">
            A payment link would be created and sent to the customer email
            address
          </div>
          <div className="pModal-form">

            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="billedto" className="pModal-form__label">
                    Billed to address
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="billedto"
                  type="text"
                  placeholder=""
                  id="billedto"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>

            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="email" className="pModal-form__label">
                    Customer Email Address
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="email"
                  type="email"
                  placeholder=""
                  id="email"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="customer_phone" className="pModal-form__label">
                    Phone Number
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="customer_phone"
                  type="tel"
                  placeholder=""
                  id="customer_phone"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="currency" className="pModal-form__label">
                    Currency
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <SelectInputWithoutLabel
                  options={[]}
                  name="currency"
                  id="currency"
                  value=""
                  onChange={() => {}}
                  defaultValue="American Dollars"
                  classNames="nsForm-select__alternate"
                />
              </div>
            </div>

            <hr />
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="product" className="pModal-form__label">
                    Product
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="product"
                  type="text"
                  placeholder=""
                  id="product"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>

            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">
                    Describe Item / Service
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <TextArea name="description" value="" onChange={() => {}} />
              </div>
            </div>
            {/* <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="description" className="pModal-form__label">Product</label>
                </div>
              </div>
              <div className="col-md-7">
                <TextArea name="description" value="" onChange={() => {}} />
              </div>
            </div> */}
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="cost_item" className="pModal-form__label">
                    Cost of Item
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="cost_item"
                  type="text"
                  placeholder=""
                  id="cost_item"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="quantity" className="pModal-form__label">
                    Quantity
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="quantity"
                  type="text"
                  placeholder=""
                  id="quantity"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">
                    Pick Start and End Date
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <div className="pModal-form__datepicker">
                  <p className="text--smaller">12 Jul 2019</p>
                  <RightChevron />
                  <p className="text--smaller">12 Jul 2019</p>
                </div>
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5" />
              <div className="col-md-7">
                <div className="pModal-main__notification pModal-main__notification--small">
                  <CalendarIcon />
                  <span className="text--smallest">
                    Your expected delivery date is
                    <strong>2 days</strong>
                    from payment date.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="invoice">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="invoice-card">
            <div className="invoice-header">
              <img
                className="pepperest-logo"
                src="https://res.cloudinary.com/dlfltairk/image/upload/v1595847163/hornblower/pepperest-logo-white_2x.png"
                alt="pepperest logo"
              />
              <div className="details-container">
                <div className="invoice-userdetails">
                  <p>657-36363-366262</p>
                  <p>email@gmail.com</p>
                </div>
                <div className="invoice-address">
                  <p>
                    No 21, Yemi Adenuga street, <br />
                    Yaba, Lagos State
                  </p>
                  <p>10011</p>
                </div>
              </div>
            </div>
            <div className="invoice-subcontent">
              <div className="subcontent-address">
                <div className="billed-to">
                  <p className="grey-format">Billed To</p>
                  <p>
                    No 21, Yemi Adenuga street, <br />
                    Yaba, Lagos State
                  </p>
                </div>
                <div className="invoice-number">
                  <p className="grey-format">Invoice Number</p>
                  <p>0000000</p>
                  <p className="grey-format">Date of Issue</p>
                  <p>10/07/14</p>
                </div>
              </div>
              <div className="invoice-total">
                <p className="grey-format">Invoice Total</p>
                <p>N7,0000</p>
              </div>
            </div>
            <div className="invoice-content">
              <div className="item-header">
                <p>Description</p>
                <div className="item-unit">
                  <p>Quantity</p>
                  <p>Unit Cost</p>
                  <p>Amount</p>
                </div>
              </div>
              <div className="item-container">
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
              </div>
              <div className="total-items">
                <div className="total-items-container">
                  <div className="total-items-content">
                    <p>Subtotal</p>
                    <p>N40000</p>
                  </div>
                  <div className="total-items-content">
                    <p>Tax</p>
                    <p>N400</p>
                  </div>
                  <div className="total-items-content">
                    <p>Total</p>
                    <p>N70000</p>
                  </div>
                  <div className="total-items-content mt-20">
                    <p>Amount Due(Naira)</p>
                    <p>N70,0000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invoice-footer">
              <div className="invoice-footer-child">
                <div className="button button--auto button-md button--orange">
                  Download
                </div>
                <div className="button button--auto button-md button--neutral ml-15">
                  Send Via Email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="pModal-footer">
        <div className="button button--auto button-md button--orange">
           + ITEM
        </div>
          <PepperestContext.Consumer>
            {(context) => (
              <div
                role="button"
                tabIndex={0}
                className="button button--auto button-md button--neutral"
                onClick={() => {
                  context.updateShowPaymentModal(false);
                }}
              >
                CANCEL
              </div>
            )}
          </PepperestContext.Consumer>

          <div className="button button--orange">
            <Link
              to="/invoice"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              CREATE
            </Link>
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
);

export default Modal;
