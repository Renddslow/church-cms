import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Select from '../Select';

const SidebarGrid = styled.div`
  display: grid;
  grid-gap: 12px;
`;

const COMPONENTS = {
  input: Input,
  select: Select,
};

const Sidebar = ({ schema }) => (
  <SidebarGrid>
    {schema.map((node) => {
      const { type, ...props } = node;
      const [component, elementType] = type.split('.');

      const Component = COMPONENTS[component];

      if (!Component) return <div key={props.id} />;

      return <Component key={props.id} type={elementType} {...props} />;
    })}
  </SidebarGrid>
);

export default Sidebar;
