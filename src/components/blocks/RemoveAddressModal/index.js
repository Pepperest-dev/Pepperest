/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { CloseIcon } from "components/vectors";
import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";

const RemoveAddressModal = (props) => {
  const {context, deleteAddress} = props
  return (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content pModal-smallcontent">
        <div className="pModal-header">
          {/* <h6 className="text--small">Delete Product / Service</h6> */}
          <span />
          <div onClick={() => context.updateShowRemoveAddressModal(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="pModal-main">
          <p>Are you sure you want to delete this address?</p>
        </div>
        <div className="pModal-footer">
          <div
            className="button button--auto button-md button--neutral"
            onClick={() => context.updateShowRemoveAddressModal(false)}
            >
            CANCEL
          </div>
          <div className="button button-md button--orange"
            onClick={() => deleteAddress({addressId: context.state.address.address_id})}>
            DELETE ADDRESS
            {/* <SpinnerIcon /> */}
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
)}

export default RemoveAddressModal;
