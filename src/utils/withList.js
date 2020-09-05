import React, { useEffect, useState } from 'react';

import api from './api';
import qs from 'qs';

const withList = (Wrapper, resource, orderBy = '-date') => (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { page = 1 } = qs.parse(window.location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    setLoading(true);
    api(`/lists/${resource}`, {
      orderBy,
      page: page,
    }).then((d) => {
      setItems(d);
      setLoading(false);
    });
  }, [page]);

  useEffect(() => {
    const event = new CustomEvent(loading ? 'loading-start' : 'loading-end');
    window.dispatchEvent(event);
  }, [loading]);

  return loading && !items.length ? (
    <div />
  ) : (
    <Wrapper
      {...props}
      currentPage={parseInt(page, 10)}
      items={items.pages}
      pageCount={parseInt(items.pageCount, 10)}
    />
  );
};

export default withList;
