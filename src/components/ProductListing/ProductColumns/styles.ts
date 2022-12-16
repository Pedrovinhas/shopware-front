import styled from "styled-components";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const Container = styled.div`
    display: flex;

   gap: 48px;
    flex-shrink: initial;

    .product__listing {
        margin-top: -67px;
    }
`

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

        border: 0;

        color: ${props => props.theme.colors.lowEmphasis};

        font-size: ${props => props.theme.fontSizes.md};
        font-weight: ${props => props.theme.fontWeights.medium};

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


export const GridContainer = styled.div`
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr auto auto;

    row-gap: 4.25rem;
    column-gap: 2rem;


    @media (max-width: 1140px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        column-gap: 24px;
        row-gap: 16px;
        margin-left: 16px;
    }

    @media (max-width: 720px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        row-gap: 25px;
        column-gap: 22px;

        width: 322px;
    }

`

export const EmptyProducts = styled.div`
    width: 44.375rem;
    height: 25rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;

`