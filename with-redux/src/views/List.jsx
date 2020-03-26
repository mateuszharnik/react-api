import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import { getData, getNextPage } from "../store/actions/App";
import Spiner from "../components/Spiner";
import Alert from "../components/Alert";
import Card from "../components/Card";

class List extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onGetData: PropTypes.func.isRequired,
    onGetNextPage: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: true,
      isError: false,
      isDisabled: false,
      nextPage: null
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
          results: data.results,
          isLoading: false,
          nextPage: data.next
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true
      });
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  loadMore() {
    const { nextPage } = this.state;
    const { onGetNextPage } = this.props;

    if (nextPage) {
      this.setState(
        {
          isDisabled: true
        },
        async () => {
          try {
            const data = await onGetNextPage(nextPage);

            if (this.isComponentMounted) {
              this.setState(prevState => ({
                nextPage: data.next,
                isDisabled: false,
                results: [...prevState.results, ...data.results]
              }));
            }
          } catch (error) {
            this.setState({
              isDisabled: false,
              isError: true
            });
          }
        }
      );
    }
  }

  render() {
    const { results, isLoading, isError, nextPage, isDisabled } = this.state;
    const {
      categories,
      location: { pathname }
    } = this.props;

    const category = () => {
      const result = categories.filter(
        cat => `/${cat}`.toLowerCase() === pathname.toLowerCase()
      );
      return result[0];
    };

    const checkIfIsError = () => (
      <section className="absolute bg-grey-darkest w-full bottom-space">
        {isError ? (
          <Alert />
        ) : (
          <div className="container mx-auto pin-x flex flex-wrap">
            <h2 className="w-full text-center text-5xl mb-2 text-yellow-dark">
              {category()}
            </h2>
            {results.map(result => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
                key={result.created}
              >
                <Card result={result} />
              </div>
            ))}
            {nextPage && (
              <div className="w-full text-center my-4 mb-8">
                <button
                  disabled={isDisabled}
                  title="Load more"
                  type="button"
                  onClick={() => this.loadMore()}
                  className="bg-yellow-dark hover:bg-yellow text-black font-bold py-3 px-6 rounded-full"
                >
                  Load more
                  {isDisabled && (
                    <i className="ml-1 fas fa-circle-notch fa-spin" />
                  )}
                </button>
              </div>
            )}
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

const mapStateToProps = state => ({
  categories: state.root.categories
});

const mapDispatchToProps = dispatch => ({
  onGetData(data) {
    return dispatch(getData(data));
  },
  onGetNextPage(data) {
    return dispatch(getNextPage(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List));
