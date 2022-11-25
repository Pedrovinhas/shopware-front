import styled, { css } from "styled-components";
import { ActionButtonProps, FormControlProps, LeadingIconProps, TextFieldInputProps, TraillingIconProps, TraillingIconTwoProps } from ".";

export const TextFieldBox = styled.button<FormControlProps>`
     border-radius: ${props => props.theme.radii.base};
    position: relative;
    outline: none;
    border: none;
     

    ${(props) => props.size === 'small' && css`
        width: 3.5rem;
        height: 3.5rem;


        
    `} 

    ${(props) => props.size === 'big' && css`
        width: 24.375rem;
        height: 3.25rem;

        display: flex;
        
    `} 

`

export const LeadingIcon = styled.span<LeadingIconProps>`

    ${(props) => props.hasLeadingIcon === false && css`
       display: none;
    `} 

`

export const TextFieldInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.grey};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    border: none;
    outline: none;
   
    padding: 1rem;

    &:focus {
        border: 1px solid ${props => props.theme.colors.primary};
        
    }

    color: ${props => props.theme.colors.lowEmphasis};
        font-size: ${props => props.theme.fontSizes.md};
        font-weight: ${props => props.theme.fontWeights.medium};

    &::placeholder {
        color: ${props => props.theme.colors.lowEmphasis};
        font-size: ${props => props.theme.fontSizes.md};
        font-weight: ${props => props.theme.fontWeights.medium};
    }
`

export const ActionButton = styled.p<ActionButtonProps>`

    border: none;
    background-color: ${props => props.theme.colors.grey};
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    position: absolute;
    top: 30%;
    left: 80%;

    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.big};
   
   ${(props) => props.hasActionButton === false && css`
       display: none;
    `} 

    ${(props) => props.hasActionButton === true && css`
       display: flex;
       justify-self: flex-end;
       position: absolute;
       
       

    `} 
`

export const TraillingIcon = styled.button<TraillingIconProps>`
   
   ${(props) => props.hasTraillingIcon === false && css`
       display: none;
    `} 
`

export const TraillingIconTwo = styled.button<TraillingIconTwoProps>`
   
   ${(props) => props.hasTraillingIconTwo === false && css`
       display: none;
    `} 
`