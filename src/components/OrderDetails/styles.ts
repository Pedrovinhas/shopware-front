import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const TabsRoot = styled(Tabs.Root)`
    width: 1000px;
    gap: 24px;
  
`
export const TabsList = styled(Tabs.List)`
    display: flex;
    align-items: center;
    gap: 24px;

    background-color: ${props => props.theme.colors.grey};
  
    border-radius: 8px;
    height: 48px;

`

export const TabsContent = styled(Tabs.Content)`

    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  

    position: absolute;

    margin-top: 24px;

`

export const StyledTabTrigger = styled(Tabs.Trigger)`
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.lowEmphasis};

    border: 0;
    border: none;
    border-radius: 8px;

    font-size: ${props => props.theme.fontSizes.base};
    font-weight: ${props => props.theme.fontWeights.medium};
    cursor: pointer;
    
    padding: 6px 18px;

    width: 189px;
    height: 32px;

    transition: ${props => props.theme.animation.easeOut};

    &:first-child {
        margin-left: 16px;
    }

    &[data-state='active'] {
     
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.bright};
        
   }

`