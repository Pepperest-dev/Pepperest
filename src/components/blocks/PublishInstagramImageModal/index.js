/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, Fragment } from "react";
import { CloseIcon, RightChevron, SpinnerIcon } from "components/vectors";
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea,
} from "components/blocks";
import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";

const PublishInstagramImageModal = (props) => {
  const [ProductName, setProductName] = useState()
  const [ProductDescription, setProductDescription] = useState()
  const [ChangeAmount, setChangeAmount] = useState()
  const [ChangeCurrency, setChangeCurrency] = useState()
  const [DeliveryPeriod, setDeliveryPeriod] = useState()
  
  
  
  const handleChangeProductName = (e) => setProductName(e.target.value);
  const handleChangeProductDescription = (e) => setProductDescription(e.target.value);
  const handleChangeAmount = (e) => setChangeAmount(e.target.value);
  const handleChangeCurrency = (e) => setChangeCurrency(e.target.value);
  const handleChangeDeliveryPeriod = (e) => setDeliveryPeriod(e.target.value);
  
  
  const handleOnSubmit = (value) => {
    console.log(value)
  }

  return(  
  <>
    <form onSubmit= {handleOnSubmit} >
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
                  value= {ProductName}
                  required
                  onChange={handleChangeProductName}
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
                <TextArea name="description" value= {ProductDescription} onChange={handleChangeProductDescription}/>
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
                  value= {ChangeAmount}
                  onChange={handleChangeAmount}
                  classNames="nsForm-input__alternate"
                  required
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
                  value={ChangeCurrency}
                  onChange={handleChangeCurrency}
                  defaultValue="American Dollars"
                  required
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
                  value= {DeliveryPeriod}
                  onChange={handleChangeDeliveryPeriod}
                  classNames="nsForm-input__alternate"
                  required
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
          <button 
            className="button button-md button--orange"
            type= "submit"
          >
            PUBLISH
            {/* <SpinnerIcon /> */}
          </button>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
    </form>
  </>

)}

export default PublishInstagramImageModal;
