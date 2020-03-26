import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Specie = ({ result }) => {
  const id = () => {
    const { homeworld } = result;
    const index = homeworld.substr(homeworld.search(/[0-9]/));
    return parseInt(index, 10);
  };

  return (
    <div className="w-full text-xl">
      <p className="my-2 text-yellow-dark">
        Language:{" "}
        <span className="capitalize text-white">{result.language}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Average height:{" "}
        <span className="text-white">{result.average_height} cm</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Average lifespan:{" "}
        <span className="text-white">{result.average_lifespan}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Skin colors:{" "}
        <span className="capitalize text-white">{result.skin_colors}</span>
      </p>
      <p className="my-2">
        <Link
          to={`/planets/${id()}`}
          title="Go to planet"
          className="text-yellow-dark no-underline hover:text-yellow"
        >
          Homeworld
        </Link>
      </p>
    </div>
  );
};

Specie.propTypes = {
  result: PropTypes.shape({
    language: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    average_lifespan: PropTypes.string.isRequired,
    average_height: PropTypes.string.isRequired
  }).isRequired
};

export default Specie;
