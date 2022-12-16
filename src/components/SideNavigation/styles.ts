import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import  styled  from 'styled-components';

export const StyledTrigger = styled(Accordion.AccordionTrigger)`

    @media (max-width: 1140px) {
        display: none;
        margin-left: 16px;
    }

    width: 17.875rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.colors.bright};
    border: none;
   
    cursor: pointer;
    margin-bottom: 1rem;

    .span-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    

        .minus-icon {
            display: none;
        }
    
    }

    &[data-state='open'] {
        
        .plus-icon {
            display: none;
        }

        .minus-icon {
            display: flex;
        }
        
    }


`
export const StyledAccordionContent = styled(Accordion.AccordionContent)`

    margin-bottom: 1rem;

`

