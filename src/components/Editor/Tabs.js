import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #fff;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const TabHeader = styled.div`
  background: #f8fafc;
  width: 100%;
  border-bottom: 2px solid #ecf0f5;
`;

const Tab = styled.button.attrs({
  type: 'button',
})`
  appearance: none;
  -webkit-appearance: none;
  color: ${({ active }) => (active ? '#5087de' : '#778396')};
  background: ${({ active }) => (active ? '#fff' : 'transparent')};
  font-weight: 700;
  font-size: 16px;
  border: 0;
  border-right: 2px solid #ecf0f5;
  padding: 12px 24px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  &::after {
    content: ${({ active }) => active && `""`};
    width: 100%;
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    background: #fff;
    z-index: 1000;
    display: block;
  }

  &:not(:focus-visible) {
    outline: none;
  }
`;

const TabBody = styled.div`
  box-sizing: border-box;
  padding: 24px;
`;

const Tabs = ({ children }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Card>
      <TabHeader>
        {React.Children.map(children, (child, idx) => (
          <Tab active={idx === activeIdx} onClick={() => setActiveIdx(idx)}>
            {child.props.title}
          </Tab>
        ))}
      </TabHeader>
      <TabBody>{React.Children.toArray(children)[activeIdx].props.children}</TabBody>
    </Card>
  );
};

export default Tabs;
