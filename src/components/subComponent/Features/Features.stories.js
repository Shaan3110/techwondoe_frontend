import React from 'react';

import { Features } from './Features';

export default {
  title: 'Features',
  component: Features,
};

const Template = (args) => <Features {...args} />;

export const features = Template.bind({});
features.args = {};