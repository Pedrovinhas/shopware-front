import type { Meta, StoryObj } from '@storybook/react'
import { HorizontalCards, HorizontalCardsProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';


export default {
  title: 'Cards/HorizontalCards',
  component: HorizontalCards,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<HorizontalCardsProps>

export const Default: StoryObj<HorizontalCardsProps> = {}
