import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxButton, CheckboxProps } from '.'
import { CheckIcon } from '../Icons/CheckIcon'

export default {
  title: 'Elements/CheckboxButton',
  component: CheckboxButton,
  args: {
    text: 'Label',
    icon: <CheckIcon isFilled={false}/>,
  
  },
  argTypes: {
    icon: {
        table: {
            disable: true,
        }
    }
  },
 
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
}

export const Disabled: StoryObj<CheckboxProps> = {
    args: {
        disabled: true,
    },
    argTypes:{
        icon: {
            table: {
				disable: true,
			}
        }
    }
}
