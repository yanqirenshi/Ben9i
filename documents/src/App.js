import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import PageHome from './pages/PageHome';
import PageElements from './pages/PageElements';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

import GlobalMenu from './components/GlobalMenu';

function App(props) {
    return (
        <Router>
          <Switch>
            <Route exact path='/'         component={PageHome} />
            <Route exact path='/elements' component={PageElements} />
            <Route exact path='/b'        component={PageB} />
            <Route exact path='/c'        component={PageC} />
          </Switch>

          <Route component={GlobalMenu} />
        </Router>
    );
}

export default App;
