import type { Meta, StoryObj } from '@storybook/react'
import { Accordian, AccordianProps } from '.'
import { TextField } from '../FormControl' 


export default {
  title: 'Elements/Accordian',
  component: Accordian,
  args: {
    children: 'Conteúdo do Accordian',
  },
  argTypes: {
    
  },
 
} as Meta<AccordianProps>

export const withText: StoryObj<AccordianProps> = {}

export const withComponent: StoryObj<AccordianProps> = {
  args: {
    children: [
      <TextField size='big' hasActionButton text='Label' actionLabel='ACTION'/>
    ],
  
  },
  parameters: {
    docs: {
      description: {
        story:
          'O Accordion recebe normalmente um `<TextField/>` como `children`',
      },
    },
  },
}
