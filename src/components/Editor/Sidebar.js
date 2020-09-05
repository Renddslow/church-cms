import React from 'react';
import styled from 'styled-components';
import { get } from 'dot-prop';

import Input from '../Input';
import Select from '../Select';
import Image from '../Image';

const SidebarGrid = styled.div`
  display: grid;
  grid-gap: 12px;
`;

const COMPONENTS = {
  input: Input,
  select: Select,
  image: Image,
};

const handleValue = (d, n, t) => {
  const val = get(d, n);

  if (!val) return '';

  if (t === 'date') {
    const [date] = val.split('T');
    return date;
  }

  return val;
};

const Sidebar = ({ schema, data }) => (
  <SidebarGrid>
    {schema.map((node) => {
      const { type, ...props } = node;
      const [component, elementType] = type.split('.');

      const Component = COMPONENTS[component];

      if (!Component) return <div key={props.id} />;

      return (
        <Component
          {...props}
          key={props.id}
          type={elementType}
          value={handleValue(data, props.name, elementType)}
        />
      );
    })}
  </SidebarGrid>
);

export default Sidebar;
