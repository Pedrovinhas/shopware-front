import type { Meta, StoryObj } from '@storybook/react'
import { ShopByBrand, ShopByBrandProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Elements/ShopByBrand',
  component: ShopByBrand,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<ShopByBrandProps>

export const Default: StoryObj<ShopByBrandProps> = {}
