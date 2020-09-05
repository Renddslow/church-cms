import React from 'react';
import styled from 'styled-components';

import Input from '../Input';
import Button, { ButtonOutbound } from '../Button';

const TitleInput = styled(Input)`
  font-size: 18px;
  width: 100%;
  font-weight: 600;
`;

const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 60%) minmax(0, max-content);
  grid-gap: 48px;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, minmax(0, max-content));
`;

const Title = (props) => (
  <TitleGrid>
    <TitleInput labelHidden label="Title" placeholder="Title" value="Stuff and Things" />
    <ButtonGrid>
      <ButtonOutbound
        href={`https://flatlandchurch.com${window.location.pathname}`}
        target="_blank"
        rel="nofollow,noreferrer"
      >
        Preview
      </ButtonOutbound>
      <Button appearance="primary" type="submit">
        {props.new ? 'Create' : 'Save'}
      </Button>
    </ButtonGrid>
  </TitleGrid>
);

export default Title;
