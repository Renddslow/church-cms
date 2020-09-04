import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login } from './pages/login';

function App() {
  useEffect(() => {
    const token = window.localStorage.getItem('fca:token');
    if (!token && !['/login', '/authorize'].includes(window.location.pathname)) {
      return (window.location.href = '/login');
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/authorize">Authorize</Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
