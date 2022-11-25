import type { Meta, StoryObj } from '@storybook/react'
import { ProductPics, ProductPicsProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';
import CoachBigPhoto from '../../assets/Product/coach-big.png'
import CoachSmallPhoto from '../../assets/Product/coach-small.png'

export default {
  title: 'Elements/Product/ProductPics',
  component: ProductPics,
  args: {
    productBigImage: CoachBigPhoto,
    productSmallImage: CoachSmallPhoto

  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<ProductPicsProps>

export const Default: StoryObj<ProductPicsProps> = {}
