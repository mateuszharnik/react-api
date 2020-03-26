import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Category from "../components/Category";

const Home = ({ categories }) => (
  <section className="w-full absolute">
    <h2 className="text-center text-5xl p-4 mb-2 text-yellow-dark">
      Hello Star Wars API
    </h2>
    <p className="text-center text-2xl mb-6 text-yellow-dark">
      Data from {""}
      <a
        href="https://swapi.co/"
        title="Go to the website"
        className="text-yellow hover:text-yellow-dark"
      >
        swapi.co
      </a>
    </p>
    <div className="flex flex-wrap">
      {categories.map(category => (
        <div className="w-full md:w-1/2 p-1 md:p-2" key={category}>
          <Category text={category} />
        </div>
      ))}
    </div>
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  categories: state.root.categories
});

export default connect(mapStateToProps)(Home);
