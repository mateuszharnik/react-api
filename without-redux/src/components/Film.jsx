import React from "react";
import PropTypes from "prop-types";

const Film = ({ result }) => {
  const date = () => {
    const { release_date: releaseDate } = result;
    return releaseDate
      .split("-")
      .reverse()
      .join()
      .replace(/[,]/gm, "/");
  };

  return (
    <div className="w-full text-xl">
      <p className="my-2 text-yellow-dark">
        Director: <span className="text-white">{result.director}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Producer:{" "}
        <span className="capitalize text-white">{result.producer}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Episode:{" "}
        <span className="capitalize text-white">{result.episode_id}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Opening: <span className="text-white">{result.opening_crawl}</span>
      </p>
      <p className="my-2 text-yellow-dark">
        Release date: <span className="text-white">{date()}</span>
      </p>
    </div>
  );
};

Film.propTypes = {
  result: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    opening_crawl: PropTypes.string.isRequired
  }).isRequired
};

export default Film;
