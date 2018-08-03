import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import Navigation from './Navigation';
// here is our redux-aware our smart component

const ReduxNavigation = props => {
  const { dispatch, nav } = props;
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
  });

  return <Navigation navigation={navigation} />;
};

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(ReduxNavigation);
