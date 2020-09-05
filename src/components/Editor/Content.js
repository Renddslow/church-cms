import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import FieldWrapper from '../FieldWrapper';

const Grid = styled.div`
  display: grid;
  grid-gap: 12px;
  justify-content: start;
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
`;

const BlockButton = styled(Button)`
  max-width: max-content;
  display: flex;
  align-items: center;

  > *:first-child {
    margin-right: 4px;
  }
`;

const Widget = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 16px 20px;
  background: #f8fafc;
  border-radius: 8px;
`;

const Icon = styled.span.attrs({
  className: 'material-icons',
})``;

const Content = () => {
  return (
    <Grid>
      <BlockButton type="button">
        <Icon>add_circle_outline</Icon> Add Block
      </BlockButton>
      <Widget>
        <FieldWrapper label="Text"></FieldWrapper>
      </Widget>
      <BlockButton type="button">
        <Icon>add_circle_outline</Icon> Add Block
      </BlockButton>
    </Grid>
  );
};

export default Content;
