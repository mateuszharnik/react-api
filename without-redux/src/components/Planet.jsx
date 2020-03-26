import React from "react";
import PropTypes from "prop-types";

const Planet = ({ result }) => (
  <div className="w-full text-xl">
    <p className="my-2 text-yellow-dark">
      Climate: <span className="capitalize text-white">{result.climate}</span>
    </p>
    <p className="my-2 text-yellow-dark">
      Terrain: <span className="capitalize text-white">{result.terrain}</span>
    </p>
    <p className="my-2 text-yellow-dark">
      Population: <span className="text-white">{result.population}</span>
    </p>
    <p className="my-2 text-yellow-dark">
      Gravity: <span className="text-white">{result.gravity}</span>
    </p>
  </div>
);

Planet.propTypes = {
  result: PropTypes.shape({
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired
  }).isRequired
};

export default Planet;
