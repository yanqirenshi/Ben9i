import React from 'react';
import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import PageHome from './pages/PageHome';
import PageElements from './pages/PageElements';
import PageWrite from './pages/PageWrite';
import PageView from './pages/PageView';
import PageModel from './pages/PageModel';

import GlobalMenu from './components/GlobalMenu';

function App(props) {
    const state = props.state;

    return (
        <Router>
          <Switch>
            <Route exact path='/'         component={PageHome}     source={state.page_home} />
            <Route exact path='/elements' component={PageElements} source={state.page_element} />
            <Route exact path='/write'    component={PageWrite}    source={state.page_write} />
            <Route exact path='/view'     component={PageView}     source={state.page_view} />
            <Route exact path='/model'    component={PageModel}    source={state.page_model} />
          </Switch>

          <Route component={GlobalMenu} />
        </Router>
    );
}

const mapStateToProps = (state) => {
    return { state: state };
};

export default connect(
    mapStateToProps,
)(App);
