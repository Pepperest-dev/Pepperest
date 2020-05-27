import React from 'react';

const GoogleButton = props => (
  <div className="button button-google" role="button" tabIndex={0}  onClick={props.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="button__icon"
    >
      <g fill="none" fillRule="nonzero">
        <path
          fill="#FBBB00"
          d="M5.319 14.504l-.835 3.118-3.054.065A11.946 11.946 0 0 1 0 12c0-1.99.484-3.866 1.342-5.519l2.719.499 1.19 2.702A7.133 7.133 0 0 0 4.868 12c0 .88.16 1.725.452 2.504z"
        />
        <path
          fill="#518EF8"
          d="M23.79 9.758a12.022 12.022 0 0 1-.053 4.747 11.997 11.997 0 0 1-4.224 6.853h-.001l-3.424-.175-.485-3.025a7.152 7.152 0 0 0 3.078-3.652h-6.417V9.758H23.79z"
        />
        <path
          fill="#28B446"
          d="M19.512 21.357v.001A11.95 11.95 0 0 1 12 24c-4.57 0-8.543-2.554-10.57-6.313l3.889-3.183a7.135 7.135 0 0 0 10.284 3.654l3.909 3.2z"
        />
        <path
          fill="#F14336"
          d="M19.66 2.763l-3.888 3.182a7.137 7.137 0 0 0-10.52 3.736l-3.91-3.2A11.998 11.998 0 0 1 12 0a11.95 11.95 0 0 1 7.66 2.763z"
        />
      </g>
    </svg>

    <span>Continue with Google</span>
  </div>
);

export default GoogleButton;
