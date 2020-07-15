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

const PublishInstagramImageModal = (props) => (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content">
        <div className="pModal-header pModal-border-bottom">
          <h6 className="text--small">Add image details</h6>
          <PepperestContext.Consumer>
            {(context) => (
              <div
                onClick={() =>
                  context.updateShowPublishInstagramImageModal(false)
                }
              >
                <CloseIcon />
              </div>
            )}
          </PepperestContext.Consumer>
        </div>
        <div className="pModal-main">
          <div className="pModal-main__notification text--smallest">
            A payment link would be created
          </div>
          <div className="pModal-form">
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Product Name</label>
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
                    Product Description
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <TextArea name="description" value="" onChange={() => {}} />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Amount</label>
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
                  <label className="pModal-form__label">Currency</label>
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
                  <label className="pModal-form__label">Delivery Period</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="delivery_days"
                  type="number"
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
                  <label className="pModal-form__label">Display Image</label>
                </div>
              </div>
              <div className="col-md-7">
                <div className="image-upload">
                  <label htmlFor="file-input">
                    <img
                      src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="item"
                    />
                  </label>
                  <input className="file-input" id="file-input" type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pModal-footer pModal-border-top">
          <PepperestContext.Consumer>
            {(context) => (
              <div
                className="button button--auto button-md button--neutral"
                onClick={() =>
                  context.updateShowPublishInstagramImageModal(false)
                }
              >
                CANCEL
              </div>
            )}
          </PepperestContext.Consumer>
          <div className="button button-md button--orange">
            PUBLISH
            {/* <SpinnerIcon /> */}
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
);

export default PublishInstagramImageModal;
