import React from 'react';

import { Footer } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {};