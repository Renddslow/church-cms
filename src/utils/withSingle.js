import React, { useEffect, useState } from 'react';

import api from './api';

const withSingle = (Wrapper) => (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    api(`/files${window.location.pathname}`).then((d) => {
      setData(d);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const event = new CustomEvent(loading ? 'loading-start' : 'loading-end');
    window.dispatchEvent(event);
  }, [loading]);

  return loading && !Object.keys(data).length ? <div /> : <Wrapper {...props} data={data} />;
};

export default withSingle;
