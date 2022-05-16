import React from 'react';

import { Copyright } from './Copyright';

export default {
  title: 'Copyright',
  component: Copyright,
};

const Template = (args) => <Copyright {...args} />;

export const copyright = Template.bind({});
copyright.args = {};