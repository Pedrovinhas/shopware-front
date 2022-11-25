import styled from "styled-components";
import * as Checkbox from '@radix-ui/react-checkbox';


export const Box = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    width: 8.625rem;
    height: 2.5rem;
`

export const CheckBoxRoot = styled(Checkbox.Root)`
   width: 1.125rem;
   height: 1.125rem;

   background-color: transparent;

   border: 2px solid ${props => props.theme.colors.lowEmphasis};
   border-radius: 4px;

   transition: ${props => props.theme.animation.easeOut};

   cursor: pointer;

   &:hover {
    border-color: ${props => props.theme.colors.primary};
   }

   
    &:focus {
       
       
    }

    &:disabled {
        color: ${props => props.theme.colors.lightText};
        cursor: disabled;
        border: 2px solid ${props => props.theme.colors.lowEmphasis};
    }

    &[data-state='checked'] {
        background-color: ${props => props.theme.colors.primary};
        border: none;
    }

`

export const Label = styled.span`
    color: ${props => props.theme.colors.lowEmphasis};
    font-weight: 500;
    font-size: 1rem;
`