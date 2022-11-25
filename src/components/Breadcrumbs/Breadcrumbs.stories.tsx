import type { Meta, StoryObj } from '@storybook/react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs, BreadcrumbsProps } from '.'
import { ChevronRightSmallIcon } from '../Icons/Chevron/ChevronRightSmallIcon'
import { Text } from '../Text'

export default {
  title: 'Elements/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    children: [
        <Text color='lowEmphasis' size='medium' title='regular'>
            Breadcrumbs Label
        </Text>
    ]
  },
  argTypes: {
    
  },
 
} as Meta<BreadcrumbsProps>

export const WithText: StoryObj<BreadcrumbsProps> = {}

export const WithComponent: StoryObj<BreadcrumbsProps> = {
    args: {
        children: [
            <>
             <Text color="primary" size="medium" title="medium" onClick={() => useNavigate()} >
                    Home
                </Text>
                <ChevronRightSmallIcon isFilled/>
                <Text color="lowEmphasis" size="medium" title="medium">
                    Handbag { /* Vou ter que passar isso por props quando clicar lá no componente Horizontal Card (agrupar tudo em um Array de Objetos e fazer .map?) */}
                </Text>
            </>
        ]
    }
}
