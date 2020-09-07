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
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const EditProductModal = (props) => {
  const {user, token, updateProduct, context} = props
  const { state : {productForUpdate}} = context
  const [ProductName, setProductName] = useState(productForUpdate.productName)
  const [ProductDescription, setProductDescription] = useState(productForUpdate.productDescription)
  const [ChangeAmount, setChangeAmount] = useState(productForUpdate.amount)
  const [ChangeCurrency, setChangeCurrency] = useState("")
  const [DeliveryPeriod, setDeliveryPeriod] = useState(productForUpdate.deliveryDate)
  const [ImageUrl, setImageUrl] = useState(context.state.item)
  const [error, setError] = useState(false)

  const handleChangeProductName = (e) => setProductName(e.target.value);
  const handleChangeProductDescription = (e) => setProductDescription(e.target.value);
  const handleChangeAmount = (e) => setChangeAmount(e.target.value);
  const handleChangeCurrency = (e) => setChangeCurrency(e.target.value);
  const handleChangeDeliveryPeriod = (e) => setDeliveryPeriod(e.target.value);


  const handleOnSubmit = (e) => {
    e.preventDefault()
    const extraParams = {
      productID : productForUpdate.productID,
      productname: ProductName,
      description: ProductDescription,
      price: ChangeAmount,
      currency: 'NGN',
      deliveryperiod: DeliveryPeriod,
      link: ImageUrl,
    }
    updateProduct(token, user, extraParams)
    context.updateShowEditProductModal(false)
  }
  return (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content">
        <div className="pModal-header pModal-border-bottom">
          <h6 className="text--small">Edit Product / Service</h6>
          <div onClick={() => context.updateShowEditProductModal(false)}>
            <CloseIcon />
          </div>
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
          <div
            className="button button--auto button-md button--neutral"
            onClick={() => context.updateShowEditProductModal(false)}
            >
            CANCEL
          </div>
          <div className="button button-md button--orange">
            EDIT PRODUCT
            {/* <SpinnerIcon /> */}
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
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
    updateProduct: (token, user, extraParams) => dispatch(actions.updateProduct(token, user, extraParams)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(EditProductModal);
