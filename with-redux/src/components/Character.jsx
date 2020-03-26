import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Character = ({ result }) => {
  const id = () => {
    const { homeworld } = result;
    const index = homeworld.substr(homeworld.search(/[0-9]/));
    return parseInt(index, 10);
  };

  return (
    <div className="w-full text-xl">
      <p className="my-2 text-yellow-dark">
        Birth year: <span className="text-white">{result.birth_year}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Gender: <span className="capitalize text-white">{result.gender}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Eye color:{" "}
        <span className="capitalize text-white">{result.eye_color}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Hair color:{" "}
        <span className="capitalize text-white">{result.hair_color}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Height: <span className="text-white">{result.height} cm</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Mass: <span className="text-white">{result.mass} kg</span>
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

Character.propTypes = {
  result: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
