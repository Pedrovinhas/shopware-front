import type { Meta, StoryObj } from '@storybook/react'
import { ProductDescription, ProductDescriptionProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Elements/Product/ProductDescription',
  component: ProductDescription,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<ProductDescriptionProps>

export const Default: StoryObj<ProductDescriptionProps> = {}
