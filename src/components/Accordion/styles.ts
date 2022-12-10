import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import  styled, { css, keyframes }  from 'styled-components';
import { AccordianProps, AccordionTextSizeProps, AccordionTriggerContentProps } from '.';

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

export const StyledTrigger = styled(Accordion.AccordionTrigger)<AccordionTriggerContentProps>`

    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   

    background-color: ${props => props.theme.colors.bright};
    border: none;    

    
    ${(props) => props.size === 'big' && css`
        width: 44.25rem;
        height: 5.5rem;
  
    `} 

    ${(props) => props.size === 'medium' && css`
        width: 22.5rem;
  
    `} 

    ${(props) => props.withPadding === false && css`
        padding: 0;
  
    `} 

    ${(props) => props.withPadding === true && css`
        padding: 1rem;
  
    `} 

    ${(props) => props.withSeparator === true && css`
        flex-direction: column;
        display: flex;
        gap: 10px;
        justify-content: center;

        .trigger__content {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .trigger__separator {
          width: 100%;
        }
  
    `} 

    ${(props) => props.withSeparator === false && css`
    .trigger__separator {
          display: none;
        }

        .trigger__content {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
          
    `} 
    

`

export const AccordionRoot = styled(Accordion.Root)`
    width: 100%;
    height: 100%;
    
`

export const AccordionContent = styled(Accordion.Content)<AccordionTriggerContentProps>`

    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.primary};

    padding: 20px;
    width: 360px;
    overflow: hidden;

    ${(props) => props.size === 'big' && css`
        width: 44.25rem;
        min-height: 5.5rem;
        padding: 0;
    `} 

    ${(props) => props.size === 'medium' && css`
        width: 22.5rem;
  
    `} 

 
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

export const TextSizeContainer = styled.span<AccordionTextSizeProps>`

    ${(props) => props.textSize === 'big' && css`

      p {
        font-size: ${props => props.theme.fontSizes.xl};
      }
       
    `} 

    ${(props) => props.textSize === 'small' && css`

    p {
      font-size: ${props => props.theme.fontSizes.base};
    }
   
  
    `} 


`