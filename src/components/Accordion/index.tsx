import * as Accordion from '@radix-ui/react-accordion';
import { Text } from '../Text';
import React, { ReactNode } from 'react';
import { ChevronIcon } from '../Icons/Chevron/ChevronIcon';
import { AccordionContent, AccordionRoot, StyledTrigger, TextSizeContainer } from './styles';
import { Separator } from '../Separator';


export interface AccordianProps extends AccordionTriggerContentProps {
  children?: ReactNode;
  text?: ReactNode;
  type: 'single' | 'multiple' | any ;
  defaultValue?: string  ;
}

export interface AccordionTriggerContentProps extends AccordionTextSizeProps {
  size?: 'big' | 'medium';
  withPadding?: boolean;
  withSeparator?: boolean;
}

export interface AccordionTextSizeProps {
  textSize?: 'big' | 'small'
}

export function Accordian({defaultValue, type, children, text, size, textSize, withPadding, withSeparator, ...props}: AccordianProps) {

    return (
        <AccordionRoot type={type} defaultValue={defaultValue} {...props}>
        <Accordion.Item value='1'>
          <Accordion.Header>
          <StyledTrigger size={size} withPadding={withPadding} withSeparator={withSeparator}>
            <div className="trigger__content">
              <TextSizeContainer textSize={textSize} >
                <Text size='medium' color='highEmphasis' title='regular'>
                    {text }
                </Text>
              </TextSizeContainer>
              <ChevronIcon isFilled={false} className='chevron'/>
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

