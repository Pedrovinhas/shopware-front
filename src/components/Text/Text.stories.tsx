import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Custom title',
    size: 'medium',
    color: 'primary',
  },
  argTypes: {
    size: {
      options: ['medium', 'large', 'small'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['primary', 'highEmphasis','brown' ],
      control: {
        type: 'inline-radio',
      },
    }
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const HighEmphasis: StoryObj<TextProps> = {
    args: {
        color: 'highEmphasis'
    }
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Text as <span>',
    as: 'span',
    size: 'large',
    color: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Text sempre será um `p`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}