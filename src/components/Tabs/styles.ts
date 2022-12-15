import styled from "styled-components";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const TabsContainer = styled.div`
    display: flex;
    gap: 8px;

    .tab-next {
        width: 67px;
        height: 38px;

        background-color: ${props => props.theme.colors.grey};

        border-radius: .75rem;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }

`

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 235px;
    height: 36px;

    background-color: ${props => props.theme.colors.grey};
    border-radius: .75rem;

    gap: 2px;

`

export const ToggleGroupItem = styled(ToggleGroup.Item)`    
    border: none;
    background-color: transparent;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-state='on'] {
       
        span {
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.bright};
        }
    }

    &[data-state='off'] {

    }

`

export const TabLink = styled.span`
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.lowEmphasis};

    font-size: ${props => props.theme.fontSizes.md};
    font-weight: ${props => props.theme.fontWeights.medium};

    width: 42px;
    height: 28px;

    padding: 6px 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: .5rem;

    text-decoration: none;
   
`
