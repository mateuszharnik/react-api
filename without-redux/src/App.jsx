import React, { Component, Fragment, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import routes from "./routes";
import NavBar from "./containers/NavBar";
import Spiner from "./components/Spiner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["People", "Planets", "Species", "Films"]
    };
  }

  render() {
    const { categories } = this.state;

    return (
      <Fragment>
        <NavBar categories={categories} />
        <Route
          render={({ location }) => (
            <TransitionGroup component={null}>
              <CSSTransition
                appear
                key={location.pathname}
                classNames="fade"
                timeout={1000}
              >
                <div role="main" className="container mx-auto mt-8 relative">
                  <Suspense fallback={<Spiner />}>
                    <Switch location={location}>
                      {routes.map(route => (
                        <Route
                          exact={route.exact}
                          path={route.path}
                          key={location.pathname}
                          render={props => (
                            <route.component
                              {...props}
                              router={route.routes}
                              categories={categories}
                              key={props.location.pathname}
                            />
                          )}
                        />
                      ))}
                    </Switch>
                  </Suspense>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
