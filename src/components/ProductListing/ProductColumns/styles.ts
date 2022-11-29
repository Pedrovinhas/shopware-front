import styled from "styled-components";

export const GridContainer = styled.div`
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    row-gap: 4.25rem;
    column-gap: 2rem;

    @media (max-width: 1140px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;

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