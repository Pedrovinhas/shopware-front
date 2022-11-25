import type { Meta, StoryObj } from '@storybook/react'
import { SideNavigation, SideNavigationProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Elements/SideNavigation',
  component: SideNavigation,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<SideNavigationProps>

export const Default: StoryObj<SideNavigationProps> = {}
