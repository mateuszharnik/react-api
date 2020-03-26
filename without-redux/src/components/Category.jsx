import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ text }) => (
  <section className="md:max-w-sm md:mx-auto rounded bg-black overflow-hidden shadow-lg">
    <div className="px-6 py-6 flex flex-wrap">
      <div className="w-full mb-6 text-center font-bold text-xl capitalize">
        {text}
      </div>
      <div className="w-full text-center">
        <Link
          className="bg-yellow-dark no-underline hover:bg-yellow text-black
          font-bold py-2 px-4 rounded"
          to={`/${text.toLowerCase()}`}
          title={text}
        >
          See more...
        </Link>
      </div>
    </div>
  </section>
);

Category.propTypes = {
  text: PropTypes.string.isRequired
};

export default Category;
