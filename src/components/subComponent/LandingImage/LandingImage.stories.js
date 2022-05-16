import React from 'react';

import { LandingImage } from './LandingImage';

export default {
  title: 'Landing Image',
  component: LandingImage,
};

const Template = (args) => <LandingImage {...args} />;

export const landingImage = Template.bind({});
landingImage.args = {};