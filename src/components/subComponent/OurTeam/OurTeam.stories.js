import React from 'react';

import { OurTeam } from './OurTeam';

export default {
  title: 'Our Team',
  component: OurTeam,
};

const Template = (args) => <OurTeam {...args} />;

export const ourTeam = Template.bind({});
ourTeam.args = {};