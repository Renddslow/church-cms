import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: 4px;

  &:focus-within label {
    color: #5087de;
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
`;

export default ({ label, labelHidden, children, id }) => (
  <Grid>
    {!labelHidden && <Label htmlFor={id}>{label}</Label>}
    {children}
  </Grid>
);
