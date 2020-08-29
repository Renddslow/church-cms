import React from 'react';

import Table from '../../components/Table';
import ListHeader from '../../components/ListHeader';

const List = () => {
  return (
    <div>
      <ListHeader title="Sermons" type="sermons" />
      <Table
        columns={[
          {
            key: 'title',
            label: 'Title',
          },
          {
            key: 'date',
            label: 'Date Preached',
          },
        ]}
        data={[
          {
            permalink: '/sermons/stuff.md',
            title: 'Hello 3.0',
            date: '2020-02-05',
          },
          {
            permalink: '/sermons/things.md',
            title: 'Hello 3.0',
            date: '2020-02-05',
          },
          {
            permalink: '/sermons/other.md',
            title: 'Hello 3.0',
            date: '2020-02-05',
          },
          {
            permalink: '/sermons/hello.md',
            title: 'Hello 3.0',
            date: '2020-02-05',
          },
          {
            permalink: '/sermons/world.md',
            title: 'Hello 3.0',
            date: '2020-02-05',
          },
          {
            permalink: '/sermons/name.md',
            title: 'Hello 3.0',
            date: '2020-02-05',
          },
        ]}
      />
    </div>
  );
};

export default List;
