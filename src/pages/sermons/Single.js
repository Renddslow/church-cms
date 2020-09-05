import React from 'react';

import Editor from '../../components/Editor';

import withSingle from '../../utils/withSingle';

const Single = (props) => {
  console.log(props);
  const schema = [
    { id: 'date', name: 'date', type: 'input.date', label: 'Date Preached' },
    { id: 'vimeoId', name: 'video.id', type: 'input.text', label: 'Vimeo ID' },
    {
      id: 'speaker',
      name: 'speaker.permalink',
      type: 'select',
      label: 'Speaker',
      options: props.resources.speakers.map(({ name, permalink }) => ({
        value: permalink,
        label: name,
      })),
    },
    {
      id: 'series',
      name: 'series',
      type: 'select',
      label: 'Series',
      options: props.resources.series.map(({ title, permalink }) => ({
        label: title,
        value: permalink.replace('.md', ''),
      })),
    },
    { id: 'image', name: 'image', type: 'image', label: 'Thumbnail' },
  ];

  return <Editor sidebarSchema={schema} data={props.data} />;
};

export default withSingle(Single, {
  speakers: '/data/speakers.json',
  series: '/series',
});
