import React, { Fragment } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import component
import history from '../utils/history';
import RootContainer from './rootContainer';
import HomePage from './homepage';

import BondsList from './bonds/list';

import BondsBuyList from './buy/list';
import BondsBuyDetail from './buy/detail';
import BondsBuyOrder from './buy/order';
import BondsBuyTerm from './buy/term';
import BondsBuyFlow from './buy/flow';
import BondsBuyConfirm from './buy/confirm';
import BondsBuyInfo from './buy/info';

import BondsSaleOrder from './sale/order';
import BondsSaleConfirm from './sale/confirm';
import BondsSaleList from './sale/list';
import BondsSaleActions from './trade/actions';

const AppRouter = props => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route path="/:merchant_code/:msisdn/:time" component={HomePage} />
          <Route exact path="/" component={HomePage} />
          {props.auth ? (
            <Fragment>
              <Route exact path="/buy/" component={BondsBuyList} />
              <Route path="/buy/info" component={BondsBuyInfo} />
              <Route path="/buy/order" component={BondsBuyOrder} />
              <Route path="/buy/term" component={BondsBuyTerm} />
              <Route path="/buy/flow" component={BondsBuyFlow} />
              <Route path="/buy/confirm" component={BondsBuyConfirm} />
              <Route path="/buy/:code" component={BondsBuyDetail} />

              <Route exact path="/sell/" component={BondsSaleList} />
              <Route path="/sell/order" component={BondsSaleOrder} />
              <Route path="/sell/confirm" component={BondsSaleConfirm} />
            </Fragment>
          ) : (
            <Redirect
              to={{
                pathname: '/'
              }}
            />
          )}
        </Switch>
      </RootContainer>
    </Router>
  );
};
AppRouter.propTypes = {
  auth: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    auth: state.Account.auth
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
