import React from 'react';

import Table from '../../components/Table';
import ListHeader from '../../components/ListHeader';

import withList from '../../utils/withList';

const List = (props) => {
  const columns = [
    {
      key: 'locationName',
      label: 'Location',
    },
  ];

  return (
    <div>
      <ListHeader title="Locations" type="locations" />
      <Table
        resourceType="locations"
        columns={columns}
        data={props.items}
        pages={props.pageCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default withList(List, 'locations');
