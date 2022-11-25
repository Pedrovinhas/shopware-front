import type { Meta, StoryObj } from '@storybook/react'
import { HomeIcon } from './HomeIcon'
import { WishlistIcon } from './WishlistIcon'
import { IconProps } from "../../types/IconProps"
import { IconGallery } from './IconGallery'

export default {
  title: 'Typography/Icons',
  component: IconGallery,
  args: {
    isFilled: false
  },
  argTypes: {
    isFilled: {
        options: ['primary', 'none'],
      },
  },
} as Meta<IconProps>

export const IconList: StoryObj<IconProps> = {
    
}
