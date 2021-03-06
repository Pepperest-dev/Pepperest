/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';


const FacebookButtonAlternate = ({ onClick }) => (
  <div
    role="button"
    tabIndex={0}
    className="button button--white__with-icon"
    onClick={() => {
      onClick(true);
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon"
    >
      <path
        fill="#475993"
        fillRule="nonzero"
        d="M20.755 0H3.232A3.232 3.232 0 0 0 0 3.232v17.523a3.232 3.232 0 0 0 3.232 3.232h8.643l.014-8.571H9.662a.525.525 0 0 1-.525-.524l-.01-2.763a.525.525 0 0 1 .525-.527h2.223v-2.67c0-3.098 1.892-4.785 4.656-4.785h2.268c.29 0 .525.235.525.525v2.33c0 .29-.235.525-.525.525l-1.392.001c-1.503 0-1.794.714-1.794 1.762v2.312h3.303c.315 0 .559.275.522.587l-.328 2.763a.525.525 0 0 1-.522.464h-2.96l-.015 8.572h5.142a3.232 3.232 0 0 0 3.233-3.233V3.232A3.232 3.232 0 0 0 20.755 0z"
      />
    </svg>
    Continue with Facebook
  </div>
);

FacebookButtonAlternate.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FacebookButtonAlternate;
