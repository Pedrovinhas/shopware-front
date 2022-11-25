import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '.'
import { PlaceholderIcon } from '../Icons/PlaceholderIcon'

export default {
  title: 'Elements/Button',
  component: Button,
  args: {
    children: 'Label',
    size: 'large',
    variant: 'primary'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
        options: ['large','medium', 'small'],
        control: {
          type: 'inline-radio',
        },
      },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const WithPrimaryIcon: StoryObj<ButtonProps> = {
  args: {
    children: [
      <>
      <PlaceholderIcon variant={'primary'}/>
      Label
      <PlaceholderIcon variant={'primary'}/>
      </>
    ],
    size: 'large',
  },
}

export const WithSecondaryIcon: StoryObj<ButtonProps> = {
  args: {
    children: [
      <>
      <PlaceholderIcon variant={'secondary'}/>
      Label
      <PlaceholderIcon variant={'secondary'}/>
      </>
    ],
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Button sempre será um `button`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}