import React from 'react';
import styled from 'styled-components';
import FieldWrapper from './FieldWrapper';

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

const Input = ({ label, ...props }) => {
  const otherProps = { ...props };
  if (props.labelHidden) {
    otherProps['aria-label'] = label;
  }
  return (
    <FieldWrapper label={label} id={props.id} labelHidden={props.labelHidden}>
      <InputStyled {...props} />
    </FieldWrapper>
  );
};

export default Input;
