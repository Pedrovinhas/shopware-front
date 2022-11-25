import styled from "styled-components";
import * as Select from '@radix-ui/react-select';


export const StyledRoot = styled(Select.Root)`
 

`

export const StyledTrigger = styled(Select.Trigger)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 206px;
    height: 56px;

    border: none;
    border-radius: 6px;

    color: ${props => props.theme.colors.lowEmphasis};
    font-weight: 500;
    font-size: 16px;
    position: relative;
    padding: 1rem;

   
`


export const StyledViewport = styled(Select.Viewport)`
   
    width: 206px;
    height: 112px;
    position: absolute;
    bottom: 410%;
    left: 30%;
   
    
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.grey};

    border-radius: 8px;
`

export const StyledContent = styled(Select.Content)`
    display: flex;
    width: 206px;
    height: 56px;

`

export const StyledItem = styled(Select.Item)`
    padding: 1rem; 
   
    width: 206px;
    height: 58px;

    outline: none;
  
    color: ${props => props.theme.colors.lowEmphasis};
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;

    transition: ${props => props.theme.animation.easeOut};

    &:hover {
        background-color: ${props => props.theme.colors.primaryTint};
    }
 
`