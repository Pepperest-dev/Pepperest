/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState, useEffect} from "react";
import { CloseIcon, RightChevron, SpinnerIcon } from "components/vectors";
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea,
} from "components/blocks";
import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const ProductModal = (props) => {
  const {user, token, publishProduct, context} = props
  const [ProductName, setProductName] = useState("")
  const [ProductDescription, setProductDescription] = useState("")
  const [ChangeAmount, setChangeAmount] = useState("")
  const [ChangeCurrency, setChangeCurrency] = useState("")
  const [DeliveryPeriod, setDeliveryPeriod] = useState("")
  const [Link, setLink] = useState(context.state.item)
  const [error, setError] = useState(false)
  const [images, setImages] = useState(null)

  const handleChangeProductName = (e) => setProductName(e.target.value);
  const handleChangeProductDescription = (e) => setProductDescription(e.target.value);
  const handleChangeAmount = (e) => setChangeAmount(e.target.value);
  const handleChangeCurrency = (e) => setChangeCurrency(e.target.value);
  const handleChangeDeliveryPeriod = (e) => setDeliveryPeriod(e.target.value);
  const handleChangeLink = (e) => setLink(e.target.value);
  const handleImage = e => {
    setImages(e.target.files);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const extraParams = {
      productname: ProductName,
      description: ProductDescription,
      price: ChangeAmount,
      currency: 'NGN',
      deliveryperiod: DeliveryPeriod,
      images: images,
    }
    publishProduct(token, user, extraParams)
    context.updateShowProductModal(false)
  }

  return (
  <>
    <form onSubmit= {handleOnSubmit} >
      <div className="pModal">
        <div className="pModal-overlay" />
        <div className="pModal-content">
          <div className="pModal-header">
            <h6 className="text--small">Add Product / Service</h6>
            <div onClick={() => context.updateShowProductModal(false)}>
              <CloseIcon />
            </div>
          </div>
          {/* <div className="pModal-sub__header row mx-0">
            <div className="col-12 col-lg-6 px-0">
              <div className="pModal-sub__header-half left">
                <h6 className="text--smaller text--gray">Total Amount</h6>
                <p className="text--smaller">NGN 0</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 px-0">
              <div className="pModal-sub__header-half right">
                <h6 className="text--smaller text--gray">Pepperest Fee</h6>
                <p className="text--smaller">NGN 0</p>
              </div>
            </div>
          </div> */}
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
                    value={ProductName}
                    onChange={handleChangeProductName}
                    classNames="nsForm-input__alternate"
                    errorMessage={error ? "Enter product name": ''}
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
                  <TextArea
                    name="description"
                    value={ProductDescription}
                    placeholder=""
                    onChange={handleChangeProductDescription}
                    required
                    errorMessage={error ? "Enter product description": ''}
                    />
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
                    value={ChangeAmount}
                    onChange={handleChangeAmount}
                    required
                    errorMessage={error ? "Enter product amount": ''}
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
                    value={ChangeCurrency}
                    onChange={handleChangeCurrency}
                    defaultValue="Nigerian Naira"
                    required
                    errorMessage={error ? "Select currency": ''}
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
                    value={DeliveryPeriod}
                    onChange={handleChangeDeliveryPeriod}
                    required
                    errorMessage={error ? "Enter delivery period": ''}
                    classNames="nsForm-input__alternate"
                  />
                </div>
                {/* <div className="col-md-7">
                  <div className="pModal-form__datepicker">
                    <p className="text--smaller">12 Jul 2019</p>
                    <RightChevron />
                    <p className="text--smaller">12 Jul 2019</p>
                  </div>
                </div> */}
              </div>
              <div className="pModal-form-control row mx-0">
                <div className="col-md-5">
                  <div className="pModal-form__label-control">
                    <label className="pModal-form__label">Display Image</label>
                  </div>
                </div>
                <div className="col-md-7">
                  <input
                    name="display_image"
                    type="file"
                    placeholder=""
                    id="cost_item"
                    required
                    errorMessage={error ? "Upload Product Image": ''}
                    onChange={handleImage}
                    classNames="nsForm-input__alternate"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pModal-footer">
            <div
              className="button button--auto button-md button--neutral"
              onClick={() => context.updateShowProductModal(false)}
              >
              CANCEL
            </div>
            <button
            type= "submit"
            className="button button-md button--orange"
            >
              ADD A PRODUCT
              {/* <SpinnerIcon /> */}
            </button>
          </div>
        </div>
      </div>
    <EscapeCloseModalHelper />
    </form>
  </>
)}

const mapStateToProps = ( state, {context}) => {
  return {
      token: state.auth.token,
      user: state.auth.userInfo,
      context: context,
      loaded: state.products.loaded,
      loading: state.products.loading,
      error: state.products.error
}}

const mapDispatchToProps = (dispatch) => {
  return {
    publishProduct: (token, user, extraParams) => dispatch(actions.publishSingleProduct(token, user, extraParams)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductModal);
