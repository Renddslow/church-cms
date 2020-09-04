import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid #ebeff5;
  border-radius: 8px;
  background: #fff;
  font-size: 16px;
  padding: 8px;
  outline: none;

  &:focus {
    border-color: #5087de;
  }
`;

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

const Input = ({ label, ...props }) => {
  const otherProps = { ...props };
  if (props.labelHidden) {
    otherProps['aria-label'] = label;
  }
  return (
    <Grid>
      {!props.labelHidden && <Label htmlFor={props.id}>{label}</Label>}
      <InputStyled {...props} />
    </Grid>
  );
};

export default Input;
