/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { CloseIcon } from "components/vectors";
import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";

const DeleteProductModal = (props) => (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content pModal-smallcontent">
        <div className="pModal-header">
          {/* <h6 className="text--small">Delete Product / Service</h6> */}
          <span />
          <PepperestContext.Consumer>
            {(context) => (
              <div onClick={() => context.updateShowDeleteProductModal(false)}>
                <CloseIcon />
              </div>
            )}
          </PepperestContext.Consumer>
        </div>
        <div className="pModal-main">
          <p>
            Are you sure you want to delete
            <span className="product-name">Product Name</span>?
          </p>
        </div>
        <div className="pModal-footer">
          <PepperestContext.Consumer>
            {(context) => (
              <div
                className="button button--auto button-md button--neutral"
                onClick={() => context.updateShowDeleteProductModal(false)}
              >
                CANCEL
              </div>
            )}
          </PepperestContext.Consumer>
          <div className="button button-md button--orange">
            DELETE PRODUCT
            {/* <SpinnerIcon /> */}
          </div>
        </div>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
);

export default DeleteProductModal;
