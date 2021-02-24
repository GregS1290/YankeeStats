import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Players from './Players';
import Team from './Team';
import Articles from './Articles';
import Contact from './Contact';

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/Players' component={Players} />
          <Route exact path='/Teamstats' component={Team} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
