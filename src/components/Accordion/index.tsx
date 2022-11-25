import * as Accordion from '@radix-ui/react-accordion';
import { Text } from '../Text';
import React, { ReactNode } from 'react';
import { ChevronIcon } from '../Icons/Chevron/ChevronIcon';
import { AccordionContent, StyledTrigger } from './styles';


export interface AccordianProps {
  children?: ReactNode;
  text?: ReactNode;
}

export function Accordian({children, text}: AccordianProps) {

    return (
        <Accordion.Root type='multiple' >
        <Accordion.Item value='1'>
          <Accordion.Header>
          <StyledTrigger>
            <Text size='medium' color='highEmphasis' title='regular'> 
                {text }
            </Text>
            <ChevronIcon isFilled={false}/>
            
            </StyledTrigger>
          </Accordion.Header>
          <AccordionContent> 
              {children}
            </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    )
}

