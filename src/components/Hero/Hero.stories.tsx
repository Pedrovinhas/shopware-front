import type { Meta, StoryObj } from '@storybook/react'
import { Hero, HeroProps } from '.'

export default {
  title: 'Elements/Hero',
  component: Hero,
  args: {
  },
  argTypes: {
    
  },
 
} as Meta<HeroProps>

export const Custom: StoryObj<HeroProps> = {}

export const BlackFriday: StoryObj<HeroProps> = {
    args: {
        hasBlackFriday: true
    }
}
