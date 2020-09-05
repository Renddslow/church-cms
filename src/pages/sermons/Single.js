import React from 'react';

import Editor from '../../components/Editor';

const Single = () => (
  <Editor
    sidebarSchema={[
      { id: 'date', name: 'date', type: 'input.date', label: 'Date Preached' },
      { id: 'vimeoId', name: 'vimeo.id', type: 'input.text', label: 'Vimeo ID' },
      {
        id: 'speaker',
        name: 'speaker.permalink',
        type: 'select',
        label: 'Speaker',
        options: [],
      },
      { id: 'series', name: 'series', type: 'select', label: 'Series', options: [] },
      { id: 'image', name: 'image', type: 'image', label: 'Thumbnail' },
    ]}
  />
);

export default Single;
