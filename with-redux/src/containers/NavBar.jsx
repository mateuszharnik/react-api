import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleMenu, closeMenu } from "../store/actions/NavBar";

const NavBar = ({
  isOpen,
  isExpanded,
  onToggleMenu,
  onCloseMenu,
  categories
}) => {
  const active = () => (isOpen ? "block" : "hidden");
  const expanded = () => (isExpanded ? "true" : "false");

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-no-shrink mr-6">
          <Link
            to="/"
            title="Home"
            onClick={onCloseMenu}
            className="text-yellow-dark no-underline hover:text-yellow-light"
          >
            <span className="font-semibold text-xl tracking-tight">SWAPI</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            type="button"
            className="flex items-center px-3 py-2 text-yellow-dark hover:text-yellow-light"
            onClick={onToggleMenu}
            aria-expanded={expanded()}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${active()}`}>
          <div className="text-center lg:flex-grow">
            {categories.map(category => (
              <Link
                key={category}
                title={category}
                to={`/${category.toLowerCase()}`}
                onClick={onCloseMenu}
                className="block mt-4 no-underline text-yellow-dark capitalize hover:text-yellow-light mr-4
                  lg:inline-block lg:mt-0"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
  onCloseMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isOpen: state.navbar.isOpen,
  isExpanded: state.navbar.isExpanded,
  categories: state.root.categories
});

export default connect(mapStateToProps, {
  onToggleMenu: toggleMenu,
  onCloseMenu: closeMenu
})(NavBar);
