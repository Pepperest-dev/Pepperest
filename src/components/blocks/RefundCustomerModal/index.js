/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState, useContext} from "react";
import { CloseIcon } from "components/vectors";
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea,
} from "components/blocks";
import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const RefundCustomerModal = (props) => {
  const context = useContext(PepperestContext);
  const {user, token, refund, alert} = props
  const [state, setState] = useState({
    trans_ref : context?.state.transactionId,
    category : "",
    description : ""
  })
  const handleState = e => {
    let name = e.target.name
    let val = e.target.value
    setState({ ...state, [name]: val})
  }
  const submit = () => {
    if (!state.trans_ref) {
      alert("Please contact admin", "error")
    }
    else if (!state.description) {
      alert("Please enter a description", "error")
    }
    else if (!state.category) {
      alert("Please select a category", "error")
    }
    else {
      const extraParams = {
        ...state,
      }
      refund(token, user, extraParams);
      context.updateShowRefundCustomerModal(false)
    }
  }

  return (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content pModal-midcontent">
        <div className="pModal-header pModal-border-bottom">
          <h6 className="text--small">Refund Customer</h6>
          <div onClick={() => context.updateShowRefundCustomerModal(false)}>
            <CloseIcon />
          </div>
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
                <TextArea name="description" value={state.description} onChange={handleState} />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Transaction Ref</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  disabled
                  name="trans_ref"
                  type="text"
                  placeholder=""
                  id="trans_ref"
                  value={state.trans_ref}
                  onChange={handleState}
                  classNames="nsForm-input__alternate"
                />
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
                  options={[
                    {label: "Merchant Failure", value: "Merchant Failure"},
                    {label: "Bad Product", value: "Bad Product"},
                    {label: "System Failure", value: "System Failure"},
                  ]}
                  name="category"
                  id="category"
                  value={state.category}
                  onChange={handleState}
                  defaultValue="--select--"
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
                  options={[
                    {label: "Bad", value: "Bad"},
                    {label: "Very Bad", value: "Very Bad"},
                    {label: "Unbearable", value: "Unbearable"},
                  ]}
                  name="severity"
                  id="severity"
                  value={state.severity}
                  onChange={handleState}
                  defaultValue="--select--"
                  classNames="nsForm-select__alternate"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pModal-footer pModal-border-top">
          <div
            className="button button--auto button-md button--neutral"
            onClick={() => context.updateShowRefundCustomerModal(false)}
            >
            CANCEL
          </div>
          <div className="button button-md button--orange" onClick={submit}>
            REFUND
            {/* <SpinnerIcon /> */}
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
)}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.userInfo,
})

const mapDispatchToProps = (dispatch) => ({
    refund: (token, user, extraParams) => dispatch(actions.requestRefund(token, user, extraParams)),
    alert: (message, type) => dispatch(actions.setAlert(message, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RefundCustomerModal);
