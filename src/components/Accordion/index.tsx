import * as Accordion from '@radix-ui/react-accordion';
import { Text } from '../Text';
import React, { ReactNode } from 'react';
import { ChevronIcon } from '../Icons/Chevron/ChevronIcon';
import { AccordionContent, AccordionRoot, StyledTrigger } from './styles';
import { Separator } from '../Separator';


export interface AccordianProps extends AccordionTriggerContentProps {
  children?: ReactNode;
  text?: ReactNode;
  
}

export interface AccordionTriggerContentProps {
  size?: 'big' | 'medium';
  withPadding?: boolean;
  withSeparator?: boolean;
}

export function Accordian({children, text, size, withPadding, withSeparator}: AccordianProps) {

    return (
        <AccordionRoot type='multiple' >
        <Accordion.Item value='1'>
          <Accordion.Header>
          <StyledTrigger size={size} withPadding={withPadding} withSeparator={withSeparator}>
            <div className="trigger__content">
              <Text size='medium' color='highEmphasis' title='regular'>
                  {text }
              </Text>
              <ChevronIcon isFilled={false}/>
            </div>

            <div className="trigger__separator">
             <Separator/>
            </div>
           
            </StyledTrigger>
            
          </Accordion.Header>
          <AccordionContent size={size} > 
              {children}
            </AccordionContent>
        </Accordion.Item>
      </AccordionRoot>
    )
}

