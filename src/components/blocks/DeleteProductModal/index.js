/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { CloseIcon } from "components/vectors";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const DeleteProductModal = (props) => {
  const {user, token, removeProduct, context} = props
  const {state: {productForDeleting:{productID, productName}}} = context

  const deleteProduct = () => {
    removeProduct(token, user, {productID});
    context.updateShowDeleteProductModal(false);
    context.updateShowProductListModal(false);
  }

  return (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content pModal-smallcontent">
        <div className="pModal-header">
          {/* <h6 className="text--small">Delete Product / Service</h6> */}
          <span />
          <div onClick={() => context.updateShowDeleteProductModal(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="pModal-main">
          <p>
            Are you sure you want to delete
            <span className="product-name">{productName}</span>?
          </p>
        </div>
        <div className="pModal-footer">
          <div
            className="button button--auto button-md button--neutral"
            onClick={() => context.updateShowDeleteProductModal(false)}
            >
            CANCEL
          </div>
          <div
            className="button button-md button--orange"
            onClick={() => deleteProduct()}>
            DELETE PRODUCT
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
    removeProduct: (token, user, extraParams) => dispatch(actions.removeProduct(token, user, extraParams)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(DeleteProductModal);
