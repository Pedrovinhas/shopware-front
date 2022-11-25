import * as Select from '@radix-ui/react-select';
import { ReactNode } from 'react';
import { ChevronIcon } from '../../Icons/Chevron/ChevronIcon';
import { StyledContent, StyledItem, StyledRoot, StyledTrigger, StyledViewport } from './styles';

export interface SelectControlProps {
    text: ReactNode
}

export function SelectControl({ text }: SelectControlProps) {
    return (
        <StyledRoot>
        <StyledTrigger>
          {text}
          <ChevronIcon isFilled/>
        </StyledTrigger>
    

          <StyledContent>
            <Select.ScrollUpButton />
           
            <StyledViewport>
              <StyledItem value='1'>
              Ascending
              </StyledItem>
    
              <Select.Group>
                <Select.Label />
               
                <StyledItem value='2'>
                  Descending
                </StyledItem>
              </Select.Group>
    
              <Select.Separator />
            </StyledViewport>
            <Select.ScrollDownButton />
          </StyledContent>
      </StyledRoot>
    )
}