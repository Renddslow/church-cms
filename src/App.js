import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login, Authorize } from './pages/login';
import UserProvider from './utils/UserContext';
import Dashboard from './Dashboard';

function App() {
  const token = window.localStorage.getItem('fca:token');
  if (!token && !['/login', '/authorize'].includes(window.location.pathname)) {
    return (window.location.href = '/login');
  }

  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/authorize" render={(props) => <Authorize {...props} />} />
          <Dashboard />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
