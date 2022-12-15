import styled from "styled-components";

export const Container = styled.div`
    display: flex;

   gap: 48px;
    flex-shrink: initial;

    .product__listing {
        margin-top: -67px;
    }
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