import type { Meta, StoryObj } from '@storybook/react'
import { ProductListing, ProductListingProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Elements/Product/ProductListing',
  component: ProductListing,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<ProductListingProps>

export const Default: StoryObj<ProductListingProps> = {}
