import React from 'react';

import Table from '../../components/Table';
import ListHeader from '../../components/ListHeader';

import withList from '../../utils/withList';

const List = (props) => {
  const columns = [
    {
      key: 'title',
      label: 'Title',
    },
  ];

  return (
    <div>
      <ListHeader title="Pages" type="pages" />
      <Table
        resourceType="pages"
        columns={columns}
        data={props.items.map((data) => ({
          ...data,
          title: data.permalink === '_index.md' ? 'Home' : data.title,
        }))}
      />
    </div>
  );
};

export default withList(List, 'pages');
