import React from 'react';
import PropTypes from 'prop-types';

const AddIcon = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" fill="#ff721b" width="18px" height="18px"
    style={{margin: "0 3px"}}
    onClick={() => { onClick(); }}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
  </svg>
);

AddIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  // className: PropTypes.string.isRequired,
};


export default AddIcon;
