import React from 'react';

import { ContactUs } from './ContactUs';

export default {
  title: 'Contact Us',
  component: ContactUs,
};

const Template = (args) => <ContactUs {...args} />;

export const contactUs = Template.bind({});
contactUs.args = {};