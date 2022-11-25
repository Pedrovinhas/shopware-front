import type { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Header and Footers/Header',
  component: Header,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<HeaderProps>

export const Custom: StoryObj<HeaderProps> = {}
