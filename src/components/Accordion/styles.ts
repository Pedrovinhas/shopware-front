import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import  styled  from 'styled-components';

export const StyledTrigger = styled(Accordion.AccordionTrigger)`

    width: 360px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem;

    background-color: ${props => props.theme.colors.bright};
    border: none;

`

export const AccordionContent = styled(Accordion.Content)`

    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.primary};

    padding: 20px;
    width: 360px;

   

`