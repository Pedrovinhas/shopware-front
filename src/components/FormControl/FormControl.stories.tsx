import type { Meta, StoryObj } from '@storybook/react'
import { TextField, FormControlProps } from '.'
import { PlaceholderIcon } from '../Icons/PlaceholderIcon'

export default {
  title: 'Form Controls/FormControl',
  component: TextField,
  args: {
    size: 'big',
    text: 'Label',
    hasActionButton: false,

  },
  argTypes: {
  },
 
} as Meta<FormControlProps>

export const Default: StoryObj<FormControlProps> = {}


export const WithActionButton: StoryObj<FormControlProps> = {
    args: {
    hasActionButton: true,
     actionLabel: 'ACTION'
    },
    argTypes: {}
}
