import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Sidebar from './Sidebar';
import Tabs from './Tabs';

const EditorGrid = styled.div`
  grid-template-columns: minmax(0, 66%) minmax(0, 1fr);
  grid-gap: 56px;
  display: grid;
  box-sizing: border-box;
  padding-top: 48px;
`;

const Editor = ({ data = {}, sidebarSchema }) => (
  <form>
    <Title value={data.title} />
    <EditorGrid>
      <Tabs>
        <div title="Content">Hello World</div>
        <div title="SEO">This is some seo stuff</div>
      </Tabs>
      <Sidebar schema={sidebarSchema} />
    </EditorGrid>
  </form>
);

export default Editor;
