import React from 'react';

import { OurTeam } from './OurTeam';

export default {
  title: 'OurTeam',
  component: OurTeam,
};

const Template = (args) => <OurTeam {...args} />;

export const ourTeam = Template.bind({});
ourTeam.args = {};