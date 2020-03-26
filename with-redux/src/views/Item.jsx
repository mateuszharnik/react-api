import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import { getData } from "../store/actions/App";
import Spiner from "../components/Spiner";
import Alert from "../components/Alert";
import Character from "../components/Character";
import Film from "../components/Film";
import Planet from "../components/Planet";
import Specie from "../components/Specie";

class Item extends Component {
  static propTypes = {
    onGetData: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.object.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      result: [],
      isLoading: true,
      isError: false
    };

    this.isComponentMounted = false;
  }

  async componentDidMount() {
    this.isComponentMounted = true;

    const {
      location: { pathname },
      onGetData
    } = this.props;

    try {
      const data = await onGetData(pathname);

      if (this.isComponentMounted) {
        this.setState({
          result: data,
          isLoading: false
        });
      }
    } catch (error) {
      this.setState({
        isError: true,
        isLoading: false
      });
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    const { isError, isLoading, result } = this.state;
    const {
      match: { params }
    } = this.props;

    const backLink = () => params[0];

    const switchItem = () => {
      if (result.director) {
        return <Film result={result} />;
      }

      if (result.climate) {
        return <Planet result={result} />;
      }

      if (result.average_height) {
        return <Specie result={result} />;
      }

      return <Character result={result} />;
    };

    const checkIfIsError = () => (
      <section className="absolute bg-grey-darkest w-full bottom-space p-1 md:p-2">
        {isError || result.detail ? (
          <Alert />
        ) : (
          <div className="container mx-auto pin-x">
            <div className="md:max-w-sm md:mx-auto h-full rounded bg-black overflow-hidden shadow-lg">
              <div className="px-10 py-10 flex flex-wrap">
                <div className="w-full mb-2 text-yellow-dark font-bold text-4xl capitalize">
                  {result.name || result.title}
                </div>
                {switchItem()}
                <Link
                  to={`/${backLink()}`}
                  title="Back"
                  className="bg-yellow-dark hover:bg-yellow text-black
                  font-bold no-underline py-2 px-4 rounded-full"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    );

    return (
      <TransitionGroup component={null}>
        <CSSTransition appear key={isLoading} classNames="fade" timeout={1000}>
          {isLoading ? <Spiner /> : checkIfIsError()}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetData(data) {
    return dispatch(getData(data));
  }
});

export default connect(null, mapDispatchToProps)(withRouter(Item));
