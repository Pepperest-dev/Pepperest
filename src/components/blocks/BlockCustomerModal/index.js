/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment } from "react";
import { CloseIcon, RightChevron, SpinnerIcon } from "components/vectors";
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea,
} from "components/blocks";
import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";

const BlockCustomerModal = (props) => (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content pModal-midcontent">
        <div className="pModal-header pModal-border-bottom">
          <h6 className="text--small">Block Customer</h6>
          <PepperestContext.Consumer>
            {(context) => (
              <div onClick={() => context.updateShowBlockCustomerModal(false)}>
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
                  <label className="pModal-form__label">Description</label>
                </div>
              </div>
              <div className="col-md-7">
                <TextArea name="description" value="" onChange={() => {}} />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Issue Category</label>
                </div>
              </div>
              <div className="col-md-7">
                <SelectInputWithoutLabel
                  options={[]}
                  name="issue_category"
                  id="issue_category"
                  value=""
                  onChange={() => {}}
                  defaultValue="Violent Customer"
                  classNames="nsForm-select__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">How Severe</label>
                </div>
              </div>
              <div className="col-md-7">
                <SelectInputWithoutLabel
                  options={[]}
                  name="severity"
                  id="severity"
                  value=""
                  onChange={() => {}}
                  defaultValue="bad"
                  classNames="nsForm-select__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Attachment</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="attachment"
                  type="file"
                  placeholder=""
                  id="cost_item"
                  value=""
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
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
                onClick={() => context.updateShowBlockCustomerModal(false)}
              >
                CANCEL
              </div>
            )}
          </PepperestContext.Consumer>
          <div className="button button-md button--orange">
            BLOCK CUSTOMER
            {/* <SpinnerIcon /> */}
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
);

export default BlockCustomerModal;
