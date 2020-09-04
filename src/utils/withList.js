import React, { useEffect, useState } from 'react';
import sort from 'sort-on';

import api from './api';

const withList = (Wrapper, resource, orderBy = '-date') => (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    api(`/lists/${resource}`).then((d) => {
      setItems(d);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const event = new CustomEvent(loading ? 'loading-start' : 'loading-end');
    window.dispatchEvent(event);
  }, [loading]);

  return loading && !items.length ? <div /> : <Wrapper {...props} items={sort(items, orderBy)} />;
};

export default withList;
