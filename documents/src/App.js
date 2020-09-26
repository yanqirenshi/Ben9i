import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import PageHome from './pages/PageHome';
import PageElements from './pages/PageElements';
import PageWrite from './pages/PageWrite';
import PageView from './pages/PageView';
import PageXML from './pages/PageXML';

import GlobalMenu from './components/GlobalMenu';

function App(props) {
    return (
        <Router>
          <Switch>
            <Route exact path='/'         component={PageHome} />
            <Route exact path='/elements' component={PageElements} />
            <Route exact path='/write'    component={PageWrite} />
            <Route exact path='/view'     component={PageView} />
            <Route exact path='/xml'      component={PageXML} />
          </Switch>

          <Route component={GlobalMenu} />
        </Router>
    );
}

export default App;
