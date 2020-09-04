import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Loading from './components/Loading';
import Panel from './components/Panel';

import { withUser } from './utils/UserContext';

import { SermonList } from './pages/sermons';

const Main = styled.main`
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 36px;
`;

const Dashboard = ({ user }) => {
  return (
    <Panel>
      <Navigation permissions={user ? user.permissions : []}>
        {[
          { to: '/dashboard', label: 'Dashboard', icon: 'home' },
          { to: '/sermons', label: 'Sermons', icon: 'ondemand_video', rule: 'sermons' },
          { to: '/series', label: 'Series', icon: 'featured_play_list', rule: 'resources' },
          { to: '/blog', label: 'Blog', icon: 'rss_feed', rule: 'blog' },
          { to: '/pages', label: 'Pages', icon: 'description', rule: 'content' },
          { to: '/classes', label: 'Classes', icon: 'school', rule: 'content' },
          { to: '/locations', label: 'Locations', icon: 'location_on', rule: 'content' },
          { to: '/resources', label: 'Resources', icon: 'local_library', rule: 'resources' },
          { to: '/volunteer', label: 'Volunteer', icon: 'support', rule: 'pco' },
        ]}
      </Navigation>
      <div>
        <Header />
        <Loading />
        <Main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
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
  );
};

export default withUser(Dashboard);
