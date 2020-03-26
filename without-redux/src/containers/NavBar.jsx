import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NavBar extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      isExpanded: false
    };
  }

  toggleMenu() {
    const { isDisabled } = this.state;

    if (!isDisabled) {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
        isExpanded: !prevState.isExpanded,
        isDisabled: true
      }));

      setTimeout(() => {
        this.setState({
          isDisabled: false
        });
      }, 400);
    }
  }

  closeMenu() {
    this.setState({
      isOpen: false,
      isExpanded: false
    });
  }

  render() {
    const { isOpen, isExpanded } = this.state;
    const { categories } = this.props;

    const active = () => (isOpen ? "block" : "hidden");
    const expanded = () => (isExpanded ? "true" : "false");

    return (
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
          <div className="flex items-center flex-no-shrink mr-6">
            <Link
              to="/"
              title="Home"
              onClick={() => this.closeMenu()}
              className="text-yellow-dark no-underline hover:text-yellow-light"
            >
              <span className="font-semibold text-xl tracking-tight">
                SWAPI
              </span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              type="button"
              className="flex items-center px-3 py-2 text-yellow-dark hover:text-yellow-light"
              onClick={() => this.toggleMenu()}
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
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto ${active()}`}
          >
            <div className="text-center lg:flex-grow">
              {categories.map(category => (
                <Link
                  key={category}
                  title={category}
                  to={`/${category.toLowerCase()}`}
                  onClick={() => this.closeMenu()}
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
  }
}

export default NavBar;
