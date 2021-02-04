/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment, useState } from "react";
import { CloseIcon, RightChevron, SpinnerIcon } from "components/vectors";
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea,
} from "components/blocks";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const ReportIssueModal = (props) => {
  const {user, token, reportIssue, context, alert} = props
  const [state, setState] = useState({
    issue_type : "",
    severity : "",
    description : ""
  })
  const [images, setImages] = useState(null)
  const handleState = e => {
    let name = e.target.name
    let val = e.target.value
    setState({ ...state, [name]: val})
  }

  const handleImage = e => {
    setImages(e.target.files);
  }

  const submit = () => {
    if (!state.description) {
      alert("Please enter a description", "error")
    }
    else if (!state.issue_type) {
      alert("Please select an issue category", "error")
    }
    else if (!state.severity) {
      alert("Please select a severity", "error")
    }
    else {
      const extraParams = {
        ...state,
        images: images
      }
      reportIssue(token, user, extraParams);
      context.updateShowReportIssueModal(false)
    }
  }
  return (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content pModal-midcontent">
        <div className="pModal-header pModal-border-bottom">
          <h6 className="text--small">Report Issue</h6>
          <div onClick={() => context.updateShowReportIssueModal(false)}>
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
                <TextArea name="description" value={state.description}
                  onChange={handleState} />
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
                    {label: "Product Defect", value: "Product Defect"},
                    {label: "Delayed Delivery", value: "Delayed Delivery"},
                    {label: "Harsh Customer", value: "Harsh Customer"},
                    {label: "Payment Dispute", value: "Payment Dispute"},
                    {label: "Others", value: "Others"}
                  ]}
                  name="issue_type"
                  id="issue_type"
                  value={state.issue_type}
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
                    {label: "Moderate", value: "Moderate"},
                    {label: "Bad", value: "Bad"},
                    {label: "Very Bad", value: "Very Bad"}
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
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Attachment</label>
                </div>
              </div>
              <div className="col-md-7">
                <input
                  name="attachment"
                  type="file"
                  id="cost_item"
                  onChange={handleImage}
                  classNames="nsForm-input__alternate"
                  multiple
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pModal-footer pModal-border-top">
          <div
            className="button button--auto button-md button--neutral"
            onClick={() => context.updateShowReportIssueModal(false)}
            >
            CANCEL
          </div>
          <div className="button button-md button--orange" onClick={submit}>
            REPORT ISSUE
            {/* <SpinnerIcon /> */}
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
)}

const mapStateToProps = (state, {context}) => ({
  token: state.auth.token,
  user: state.auth.userInfo,
  context
})

const mapDispatchToProps = (dispatch) => ({
    reportIssue: (token, user, extraParams) => dispatch(actions.reportIssue(token, user, extraParams)),
    alert: (message, type) => dispatch(actions.setAlert(message, type))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportIssueModal);
