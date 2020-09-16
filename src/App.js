import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { PageNotFound } from 'pages';
import { getStringHash } from 'libs/utils';
import PepperestProvider from 'components/helpers/PepperestProvider';
import Alert from 'components/shared/Alert';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import './assets/scss/styles.scss';
import routes from 'config/routes';

function App(props) {

  useEffect(() => {
    if(!props.isAuthenticated) {
      props.onTryAutoSignup();
    }
  });

  return (
    <PepperestProvider>
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <>
          <Alert/>
          <Switch>
            {routes.map(({
              path, component, exact, isProtected,
            }) =>
              <Route
                key={getStringHash(path)}
                path={path}
                exact={exact}
                component={component}
              />
            )}
            <Route path="/404" component={PageNotFound} />
            <Redirect to={{ pathname: '/404' }} />
          </Switch>
          </>
        </Suspense>
      </Router>
    </PepperestProvider>
  );
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default ( connect( mapStateToProps, mapDispatchToProps )( App ) );
