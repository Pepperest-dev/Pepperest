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
        <div className="pModal-footer">
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
