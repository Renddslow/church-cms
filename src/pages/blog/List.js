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
      <ListHeader title="Blog" type="blog" />
      <Table
        resourceType="blog"
        columns={columns}
        data={props.items}
        pages={props.pageCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default withList(List, 'blog');
