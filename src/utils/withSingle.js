import React, { useEffect, useState } from 'react';
import pProps from 'p-props';

import api from './api';

const withSingle = (Wrapper, resources = {}) => (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [res, setResources] = useState({});

  const getResources = (r) =>
    Object.keys(r).reduce((acc, k) => {
      acc[k] = api(`/options${r[k]}`);
      return acc;
    }, {});

  useEffect(() => {
    Promise.all([
      api(`/files${window.location.pathname}`).then((d) => {
        setData(d);
      }),
      pProps(getResources(resources)).then((obj) => setResources(obj)),
    ]).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    const event = new CustomEvent(loading ? 'loading-start' : 'loading-end');
    window.dispatchEvent(event);
  }, [loading]);

  return loading || !Object.keys(data).length ? (
    <div />
  ) : (
    <Wrapper {...props} data={data} resources={res} />
  );
};

export default withSingle;
