import React from 'react';

import Editor from '../../components/Editor';

const Single = () => (
  <Editor
    sidebarSchema={[
      { name: 'date', type: 'input.datetime', label: 'Date Preached' },
      { name: 'vimeo.id', type: 'input.text', label: 'Vimeo ID' },
      { name: 'speaker.permalink', type: 'select', label: 'Speaker' },
      { name: 'series', type: 'select', label: 'Series' },
      { name: 'image', type: 'image', label: 'Thumbnail' },
    ]}
  />
);

export default Single;
