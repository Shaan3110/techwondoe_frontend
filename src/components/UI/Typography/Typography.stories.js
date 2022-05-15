import React from 'react'
import { Typography } from './Typography'

export default {
    title: 'Typography',
    component: Typography,
    argTypes: {
      color: { control: 'color' },
    },
  };

const Template = (args) => <Typography {...args} />;


export const Heading = Template.bind({});
Heading.args = {
  primary: true,
  text: 'Text',
  size: 'heading'
};


export const Subheading = Template.bind({});
Subheading.args = {
  primary: true,
  text: 'Text',
  size: 'subheading'
};


export const Paragraph = Template.bind({});
Paragraph.args = {
  primary: true,
  text: 'Text',
  size: 'paragraph'
};
