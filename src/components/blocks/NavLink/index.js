import React from "react";
import PropTypes from "prop-types";
// import { NavLink as Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const NavLink = ({ url, title, classNames, exact }) => (
  <Link to={url} className={classNames} activeClassName="active" exact={exact}>
    {title}
  </Link>
);

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default NavLink;
