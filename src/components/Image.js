import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import FieldWrapper from './FieldWrapper';
import Button from './Button';

const Widget = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 2px solid #ebeff5;
  padding: 24px;
  box-sizing: border-box;
  width: 100%;

  img {
    width: 100%;
    border-radius: 3px;
    margin-bottom: 12px;
  }
`;

const Image = (props) => {
  return (
    <FieldWrapper label={props.label}>
      <Widget>
        {props.value && <img src={props.value} alt="" />}
        <Button appearance="primary" type="button">
          Upload Image
        </Button>
        <p>- or -</p>
        <Input label="Paste Image URL" value={props.value} onChange={props.onChange} />
      </Widget>
    </FieldWrapper>
  );
};

export default Image;
