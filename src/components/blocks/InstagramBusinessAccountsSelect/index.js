/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

import { SpinnerIcon } from 'components/vectors';

const InstagramBusinessAccountsSelect = (props) => {
  console.log(props);
  return (
  <div className="instagram-page__main instagram-page__main--alt">
    <div className="instagram-page__main--header">
      Select one instagram / facebook page
    </div>
    <ul className="instagram-page__main-list">
      <div className="instagram-page__main-list-item">
        <input type="radio" id="instagramA" name="instagram" />
        <label htmlFor="instagramA"> Instagram A</label>
      </div>
      <div className="instagram-page__main-list-item active">
        <input type="radio" id="instagramB" name="instagram" checked />
        <label htmlFor="instagramB">Instagram B</label>
      </div>
      <div className="instagram-page__main-list-item">
        <input type="radio" id="instagramC" name="instagram" />
        <label htmlFor="instagramC">Instagram C</label>
      </div>
      <div className="instagram-page__main-list-item">
        <input type="radio" id="instagramD" name="instagram" />
        <label htmlFor="instagramD">Instagram D</label>
      </div>
    </ul>
    <div className="instagram-page__main--footer">
      <div className="button button-md button--neutral">CANCEL</div>
      <div className="button button-md button--orange" onClick={() => { props.onClick(true); }}>FETCH PRODUCTS</div>
    </div>
  </div>
)}

InstagramBusinessAccountsSelect.propTypes = {
  onClick: PropTypes.func.isRequired,
  pages: PropTypes.array
};

const mapStateToProps = state => {
  return {
    pages: state.products.pages
  }
}

export default connect(mapStateToProps)(InstagramBusinessAccountsSelect);
