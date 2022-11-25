import type { Meta, StoryObj } from '@storybook/react'
import { ProductInfo, ProductInfoProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Elements/Product/ProductInfo',
  component: ProductInfo,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<ProductInfoProps>

export const Default: StoryObj<ProductInfoProps> = {}
