import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import  styled, { keyframes }  from 'styled-components';

const slideDown = keyframes`
  from {
    height: 0px;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }

`


const slideUp = keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }

`
const fadeIn = keyframes`
   from {
  	opacity: 0;
  }
  to {
 	opacity: 1;
  }

`

export const StyledTrigger = styled(Accordion.AccordionTrigger)`

    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem;

    background-color: ${props => props.theme.colors.bright};
    border: none;    
    

`

export const AccordionRoot = styled(Accordion.Root)`
    width: 100%;
    height: 100%;
    
`

export const AccordionContent = styled(Accordion.Content)`

    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.primary};

    padding: 20px;
    width: 360px;
    overflow: hidden;

 
    @media (max-width:1120px) {
        padding: 0px;
        width: 100%;
        
    &[data-state='open'] {
            animation: ${slideDown} 400ms cubic-bezier(0.87, 0, 0.13, 1);
        }

    &[data-state='closed'] {
            animation:  ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
       
    }

    
`
