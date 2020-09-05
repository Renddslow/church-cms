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
      <ListHeader title="Classes" type="classes" />
      <Table
        resourceType="classes"
        columns={columns}
        data={props.items}
        pages={props.pageCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default withList(List, 'classes');
