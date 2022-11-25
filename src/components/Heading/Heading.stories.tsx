import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'medium',
    color: 'primary'
  },
  argTypes: {
    size: {
      options: ['ultralarge', 'extralarge', 'medium', 'large', 'small'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['primary', 'highEmphasis', 'lowEmphasis', 'bright', 'brown', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
    title: {
        options: ['regular', 'medium', 'bold'],
        control: {
          type: 'inline-radio',
        },
    }
    
    
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'large',
    color: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h1`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}