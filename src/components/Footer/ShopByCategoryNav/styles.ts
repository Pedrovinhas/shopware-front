import styled from "styled-components";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const ToggleGroupRoot = styled(ToggleGroup.Root)`

    display: flex;
    gap: .5rem;
    flex-direction: column;
   
`

export const ToggleGroupItem = styled(ToggleGroup.Item)`
    font-size: 16px;
    color: #b6b6b6;
    font-weight: 500;
    background-color: transparent;
    border: none;
    
    font-family: 'Inter', sans-serif;

    cursor: pointer;

    /* &[data-state='on'] {
        color: ${props => props.theme.colors.bright}
    } */
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 3.75rem;
    
    gap:.75rem;

    @media (max-width:1120px) {
        margin-left: .9375rem;
        margin-top: 1.5rem;
    }


`