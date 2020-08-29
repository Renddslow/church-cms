import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from './Button';

const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, max-content);
  grid-gap: 12px;
  align-items: end;
`;

const ListHeader = ({ title, type }) => (
  <Header>
    <h1>{title}</h1>
    <ButtonLink to={`/${type}/new`} appearance="primary">
      + Add New
    </ButtonLink>
  </Header>
);

export default ListHeader;
