import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllTools from './AllTools';


const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-item">
          <Link to="/">HOME</Link>
          </div>
          <div className="nav-item">
          <Link to="/tools">TOOLS</Link>
          </div>
        </nav>
        <main>
          <h1>
            Welcome to ShareShed
          </h1>
        </main>
        <Switch>
          <Route exact path="/tools" component={AllTools} />
          <Route render = {() => <p>Sorry this page does not exist</p>} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
