import React, { useContext, useEffect, useState } from 'react';
import qs from 'qs';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../utils/UserContext';

const Authorize = ({ location }) => {
  const { token } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:8080/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((d) => d.json())
      .then(({ data }) => {
        setUser(data.attributes);
      })
      .catch(() => setError('LoginExpired'));
  }, []); // eslint-disable-line

  useEffect(() => {
    if (user) {
      console.log(user);
      window.localStorage.setItem('fca:token', token);
      window.localStorage.setItem('fca:user', JSON.stringify(user));
      window.location.href = '/dashboard';
    }
  }, [user]); // eslint-disable-line

  return error ? <Redirect to={`/login?error=${error}`} /> : <div />;
};

export default Authorize;
