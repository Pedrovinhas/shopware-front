import * as Accordion from '@radix-ui/react-accordion';
import { ReactNode } from 'react';
import { CheckboxButton } from '../CheckboxButton';
import { CheckIcon } from '../Icons/CheckIcon';
import { MinusIcon } from '../Icons/MinusIcon';
import { PlusIcon } from '../Icons/PlusIcon';
import { Separator } from '../Separator';
import { Text } from '../Text';
import { StyledAccordionContent, StyledTrigger } from './styles';


export interface SideNavigationProps {
    label?: string;
    children?: ReactNode;
}

export function SideNavigation({ label, children }: SideNavigationProps) {

    return (
        <Accordion.Root type='multiple' >
        <Accordion.Item value='1'>
          <Accordion.Header>
          <StyledTrigger >
            <span className='span-text'>
                <Text size='large' color='highEmphasis' title='regular'>
                    Size
                </Text>

                <span className='plus-icon'>
                  <PlusIcon isFilled/>
                </span>

                <span className='minus-icon'>
                  <MinusIcon isFilled/>
                </span>
              
            </span>
            <Separator/>
            </StyledTrigger>
          </Accordion.Header>
          <StyledAccordionContent>
                <CheckboxButton 
                    text='Large' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Big' 
                    value='Big'
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Medium' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Small' 
                    icon={<CheckIcon isFilled/>}
                    />
          </StyledAccordionContent>
        </Accordion.Item>
        
        <Accordion.Item value='2'>
          <Accordion.Header>
          <StyledTrigger>
          <span className='span-text'>
                <Text size='large'  color='highEmphasis' title='regular'>
                    Color
                </Text>

                <span className='plus-icon'>
                  <PlusIcon isFilled/>
                </span>

                <span className='minus-icon'>
                  <MinusIcon isFilled/>
                </span>
              
            </span>
            <Separator/>
            </StyledTrigger>
          </Accordion.Header>
          <StyledAccordionContent>
          <CheckboxButton 
              text='Blue' 
              icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Maroon Red' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Crimson Red' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Seinna Pink' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Teal' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Aquamarine' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Off-White' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Muave Orange' 
                    icon={<CheckIcon isFilled/>}
                    />
          </StyledAccordionContent>
        </Accordion.Item>

        <Accordion.Item value='3'>
          <Accordion.Header>
          <StyledTrigger>
          <span className='span-text'>
                <Text size='large'  color='highEmphasis' title='regular'>
                    Brand
                </Text>

                <span className='plus-icon'>
                  <PlusIcon isFilled/>
                </span>

                <span className='minus-icon'>
                  <MinusIcon isFilled/>
                </span>
              
            </span>
            <Separator/>
            </StyledTrigger>
          </Accordion.Header>
          <StyledAccordionContent>
              <CheckboxButton 
                text='Biba' 
                icon={<CheckIcon isFilled/>}
              />
              <CheckboxButton 
                    text='Chanel' 
                    value='Chanel'
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='D&G' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='H2M' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Prada' 
                    icon={<CheckIcon isFilled/>}
                    />
                    <CheckboxButton 
                    text='Zara' 
                    icon={<CheckIcon isFilled/>}
                    />
          </StyledAccordionContent>
        </Accordion.Item>

        <Accordion.Item value='4'>
          <Accordion.Header>
          <StyledTrigger>
          <span className='span-text'>
                <Text size='large'  color='highEmphasis' title='regular'>
                Price Range
                </Text>

                <span className='plus-icon'>
                  <PlusIcon isFilled/>
                </span>

                <span className='minus-icon'>
                  <MinusIcon isFilled/>
                </span>
              
            </span>
            <Separator/>
            </StyledTrigger>
          </Accordion.Header>
          <StyledAccordionContent>
                Price Range
          </StyledAccordionContent>
        </Accordion.Item>

        <Accordion.Item value='5'>
          <Accordion.Header>
          <StyledTrigger>
          <span className='span-text'>
                <Text size='large'  color='highEmphasis' title='regular'>
                Discount
                </Text>

                <span className='plus-icon'>
                  <PlusIcon isFilled/>
                </span>

                <span className='minus-icon'>
                  <MinusIcon isFilled/>
                </span>
              
            </span>
            <Separator/>
            </StyledTrigger>
          </Accordion.Header>
          <StyledAccordionContent>
             Discount
          </StyledAccordionContent>
        </Accordion.Item>

        <Accordion.Item value='6'>
          <Accordion.Header>
          <StyledTrigger>
          <span className='span-text'>
                <Text size='large'  color='highEmphasis' title='regular'>
                Availability
                </Text>

                <span className='plus-icon'>
                  <PlusIcon isFilled/>
                </span>

                <span className='minus-icon'>
                  <MinusIcon isFilled/>
                </span>
              
            </span>
            <Separator/>
            </StyledTrigger>
          </Accordion.Header>
          <StyledAccordionContent>
             Availability
          </StyledAccordionContent>
        </Accordion.Item>

      </Accordion.Root>
    )
}

