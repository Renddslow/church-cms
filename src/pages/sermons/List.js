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
    {
      key: 'series',
      label: 'Series',
    },
    {
      key: 'date',
      label: 'Date Preached',
    },
  ];

  return (
    <div>
      <ListHeader title="Sermons" type="sermons" />
      <Table
        resourceType="sermons"
        columns={columns}
        data={props.items}
        pages={props.pageCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default withList(List, 'sermons');
