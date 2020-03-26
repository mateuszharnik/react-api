import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const Card = ({ result, location }) => {
  const id = () => {
    const { url } = result;
    const index = url.substr(url.search(/[0-9]/));

    return parseInt(index, 10);
  };

  const path = () => {
    const { pathname } = location;
    return pathname;
  };

  return (
    <section className="md:max-w-sm md:mx-auto rounded h-full bg-black overflow-hidden shadow-lg">
      <div className="px-6 py-6 flex flex-wrap">
        <div className="w-full mb-6 text-center font-bold text-xl capitalize">
          {result.name || result.title}
        </div>
        <div className="w-full text-center">
          <Link
            className="bg-yellow-dark no-underline hover:bg-yellow text-black
            font-bold py-2 px-4 rounded"
            to={`${path()}/${id()}`}
            title="See more"
          >
            See more...
          </Link>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Card);
