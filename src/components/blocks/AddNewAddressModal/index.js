/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { CloseIcon } from "components/vectors";
import { InputWithoutLabel, SelectInputWithoutLabel } from "components/blocks";
import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";

const AddNewAddressModal = (props) => (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content pModal-midcontent">
        <div className="pModal-header pModal-border-bottom">
          <h6 className="text--small">Add New Address</h6>
          <PepperestContext.Consumer>
            {(context) => (
              <div onClick={() => context.updateShowAddNewAddressModal(false)}>
                <CloseIcon />
              </div>
            )}
          </PepperestContext.Consumer>
        </div>
        <div className="pModal-main">
          <div className="pModal-form">
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Recipient Name</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="recipient_name"
                  type="text"
                  placeholder=""
                  id="recipient_name"
                  value=""
                  defaultValue="Wiz Sullivan"
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Street</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="street"
                  type="text"
                  placeholder=""
                  id="street"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">City</label>
                </div>
              </div>
              <div className="col-md-7">
                <SelectInputWithoutLabel
                  options={[]}
                  name="city"
                  id="city"
                  value=""
                  onChange={() => {}}
                  defaultValue="Yaba"
                  classNames="nsForm-select__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Postal Code</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="postal_code"
                  type="text"
                  placeholder=""
                  id="postal_code"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">State</label>
                </div>
              </div>
              <div className="col-md-7">
                <SelectInputWithoutLabel
                  options={[]}
                  name="state"
                  id="state"
                  value=""
                  onChange={() => {}}
                  defaultValue="Lagos"
                  classNames="nsForm-select__alternate"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pModal-footer pModal-border-top">
          <PepperestContext.Consumer>
            {(context) => (
              <div
                className="button button--auto button-md button--neutral"
                onClick={() => context.updateShowAddNewAddressModal(false)}
              >
                CANCEL
              </div>
            )}
          </PepperestContext.Consumer>
          <div className="button button-md button--orange">
            ADD NEW ADDRESS
            {/* <SpinnerIcon /> */}
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
);

export default AddNewAddressModal;
