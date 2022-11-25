import type { Meta, StoryObj } from '@storybook/react'
import { Footer, FooterProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Header and Footers/Footer',
  component: Footer,
  args: {
    
  },
  decorators: [withRouter],
  argTypes: {
    responsive: {
        options: ['mobile', 'desktop'],
        control: {
            type: 'inline-radio',
          },
    },
  },
 
} as Meta<FooterProps>

export const DesktopFooter: StoryObj<FooterProps> = {}


export const MobileFooter: StoryObj<FooterProps> = {
    args: {
        responsive: 'mobile'
    }
}
