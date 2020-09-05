import React from 'react';

import Editor from '../../components/Editor';

import withSingle from '../../utils/withSingle';

const Single = (props) => {
  const schema = [
    { id: 'date', name: 'date', type: 'input.date', label: 'Date Preached' },
    { id: 'vimeoId', name: 'video.id', type: 'input.text', label: 'Vimeo ID' },
    {
      id: 'speaker',
      name: 'speaker.permalink',
      type: 'select',
      label: 'Speaker',
      options: [],
    },
    { id: 'series', name: 'series', type: 'select', label: 'Series', options: [] },
    { id: 'image', name: 'image', type: 'image', label: 'Thumbnail' },
  ];

  return <Editor sidebarSchema={schema} data={props.data} />;
};

export default withSingle(Single);
