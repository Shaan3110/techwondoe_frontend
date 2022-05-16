import React from 'react';

import { LatestNews } from './LatestNews';

export default {
  title: 'Latest News',
  component: LatestNews,
};

const Template = (args) => <LatestNews {...args} />;

export const latestNews = Template.bind({});
latestNews.args = {};