import styled from "styled-components";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const ListingContainer = styled.div`
    display: flex;     
    justify-content: space-between;
    align-items: center;
    
    height: 3.5rem;
    width: 57.25rem;

    @media (max-width: 1140px) {
        display: none;
        margin-left: 16px;
    }
`

export const PageLayout = styled.div`
    display: flex;     
    gap: .875rem;

    .filter-icons {
        display: flex;
        gap: .25rem;
    }
`

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
    padding: 0;

`

export const ToggleGroupItem = styled(ToggleGroup.Item)`
    width: 24px;
    height: 24px;
    
    border: none;
    background-color: transparent;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-state='on'] {
        
        .sort-icon {
            
            path {
                fill: ${props => props.theme.colors.primary};
            }
        }
    }

    &[data-state='off'] {

        .grid-icon {
            path:first-child {
                fill: ${props => props.theme.colors.lightText};
            }
        }
    }

`

export const SortOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 4.625rem
`
export const ToShowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
`

export const SortByContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`
