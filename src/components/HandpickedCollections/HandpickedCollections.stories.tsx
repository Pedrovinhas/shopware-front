import type { Meta, StoryObj } from '@storybook/react'
import { HandpickedCollections, HandpickedCollectionsProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Cards/HandpickedCollections',
  component: HandpickedCollections,
  args: {
  },
  decorators: [withRouter],
  argTypes: {
    
  },
 
} as Meta<HandpickedCollectionsProps>

export const Default: StoryObj<HandpickedCollectionsProps> = {}
