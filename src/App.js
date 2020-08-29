import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Panel from './components/Panel';

import { SermonList } from './pages/sermons';
import Loading from './components/Loading';

const Main = styled.main`
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 36px;
`;

function App() {
  return (
    <Router>
      <Panel>
        <Navigation>
          {[
            { to: '/dashboard', label: 'Dashboard', icon: 'home' },
            { to: '/sermons', label: 'Sermons', icon: 'ondemand_video' },
            { to: '/series', label: 'Series', icon: 'featured_play_list' },
            { to: '/blog', label: 'Blog', icon: 'rss_feed' },
            { to: '/pages', label: 'Pages', icon: 'description' },
            { to: '/classes', label: 'Classes', icon: 'school' },
            { to: '/locations', label: 'Locations', icon: 'location_on' },
            { to: '/resources', label: 'Resources', icon: 'local_library' },
            { to: '/volunteer', label: 'Volunteer', icon: 'support' },
          ]}
        </Navigation>
        <div>
          <Header />
          <Loading />
          <Main>
            <Switch>
              <Route path="/dashboard">🖥</Route>
              <Route path="/sermons/:permalink">Sermon Link</Route>
              <Route path="/sermons">
                <SermonList />
              </Route>
              <Route path="/series">📓</Route>
              <Route path="/blog">🤓</Route>
              <Route path="/pages">📄</Route>
              <Route path="/classes">👩‍🏫</Route>
              <Route path="/locations">📌</Route>
              <Route path="/resources">📚</Route>
              <Route path="/volunteer">👩‍🚒</Route>
            </Switch>
          </Main>
        </div>
      </Panel>
    </Router>
  );
}

export default App;
