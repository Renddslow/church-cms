import React from 'react';
import styled from 'styled-components';
import FieldWrapper from './FieldWrapper';

const SelectStyled = styled.select`
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid #ebeff5;
  border-radius: 8px;
  background: #fff;
  font-size: 16px;
  padding: 8px;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 100%;

  &:focus {
    border-color: #5087de;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Icon = styled.span.attrs({
  className: 'material-icons',
})`
  position: absolute;
  right: 7px;
  bottom: 7px;
`;

const Select = ({ options, label, ...props }) => {
  const otherProps = { ...props };
  if (props.labelHidden) {
    otherProps['aria-label'] = label;
  }
  return (
    <FieldWrapper label={label} labelHidden={props.labelHidden} id={props.id}>
      <SelectWrapper>
        <SelectStyled {...otherProps}>
          <option disabled />
          {options.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </SelectStyled>
        <Icon>expand_more</Icon>
      </SelectWrapper>
    </FieldWrapper>
  );
};

export default Select;
