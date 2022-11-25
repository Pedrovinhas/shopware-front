import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Elements/Tabs',
  component: Tabs,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<TabProps>

export const Default: StoryObj<TabProps> = {}
