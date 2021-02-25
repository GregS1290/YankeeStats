import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Players from './Players';
import Team from './Team';
import Articles from './Articles';
import Contact from './Contact';
import Quotes from './Quotes';

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/players' component={Players} />
          <Route exact path='/teamstats' component={Team} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/quotes' component={Quotes} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
