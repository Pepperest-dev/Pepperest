/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'components/blocks';
import { getStringHash, getCamelCase } from 'libs/utils';
import { DownChevron, UpChevron } from 'components/vectors';
import { withRouter } from 'react-router-dom';

import { PepperestContext } from 'components/helpers/constant';


const HeaderAlternate = ({ page, links, location }) => {
  const getPathName = () => {
    const { pathname } = location;
    const indexOfLastSlash = pathname.lastIndexOf('/');
    return pathname.substring(indexOfLastSlash + 1, pathname.length);
  };
  const presentRouteString = getCamelCase(getPathName());

  const determineButton = (pageTitle) => {
    switch (pageTitle.toLowerCase()) {
      case 'payments':
        return (
          <PepperestContext.Consumer>
            {(context) => (
              <a
                className="button button-md button--orange"
                href="/invoice"
              >
                Create Invoice
              </a>
            )}
          </PepperestContext.Consumer>
        );
      case 'products':
        return (
          <PepperestContext.Consumer>
            {(context) => (
              <div
                className="button button-md button--orange"
                onClick={() => {
                  context.updateShowProductModal(true);
                }}
              >
                Add Product / Services
              </div>
            )}
          </PepperestContext.Consumer>
        );

      default:
        return null;
    }
  };

  const [state, setState] = useState({ isOpen: false });
  return (
    <div className="nsHeader-alternate">
      <div className="nsHeader-main">
        <nav className="nsHeader-nav nsHeader-alternate-nav">
          {links.map(({ url, title }, index) => (
            <NavLink
              key={getStringHash(title)}
              url={url}
              title={title}
              classNames="nsHeader-nav__item nsHeader-alternate-nav__item"
              exact
            />
          ))}
        </nav>
        <h3 className="nsHeader-nav__current-link">{presentRouteString}</h3>
        {determineButton(page)}
        {state.isOpen ? (
          <div
            className="d-block d-lg-none"
            onClick={() => {
              setState({ ...state, isOpen: !state.isOpen });
            }}
          >
            <UpChevron />
          </div>
        ) : (
          <div
            className="d-block d-lg-none"
            onClick={() => {
              setState({ ...state, isOpen: !state.isOpen });
            }}
          >
            <DownChevron />
          </div>
        )}
        {state.isOpen ? (
          <>
            <div className="nsHeader-alternate-nav__mobile-overlay" />
            <div
              className="nsHeader-alternate-nav__mobile"
              onClick={() => {
                setState({ ...state, isOpen: !state.isOpen });
              }}
            >
              <ul className="nsHeader-alternate-nav__mobile-menu">
                {links
                  .filter(({ title }) => !title.includes(presentRouteString))
                  .map(({ url, title }) => (
                    <NavLink
                      key={getStringHash(title)}
                      url={url}
                      title={title}
                      classNames="nsHeader-alternate-nav__item"
                      exact
                    />
                  ))}
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
HeaderAlternate.defaultProps = {
  // isPaymentButton:
};

HeaderAlternate.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  page: PropTypes.string.isRequired,
};

export default withRouter(HeaderAlternate);
