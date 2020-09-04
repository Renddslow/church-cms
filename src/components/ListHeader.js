import React from 'react';
import styled from 'styled-components';

import { ButtonLink, ButtonOutbound } from './Button';

const Title = styled.h1`
  margin: 0;
`;

const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(2, minmax(0, max-content));
  grid-gap: 12px;
  align-items: center;
`;

const ListHeader = ({ title, type }) => (
  <Header>
    <Title>{title}</Title>
    <ButtonOutbound
      target="_blank"
      rel="nofollow, noreferrer"
      href={`https://flatlandchurch.com/${type}`}
    >
      Preview
    </ButtonOutbound>
    <ButtonLink to={`/${type}/new`} appearance="primary">
      + Add New
    </ButtonLink>
  </Header>
);

export default ListHeader;
