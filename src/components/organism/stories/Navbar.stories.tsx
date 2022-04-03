import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from '../Navbar';

export default {
  title: 'Molecules/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = args => <Navbar />;

export const Default = Template.bind({});
Default.args = {};
