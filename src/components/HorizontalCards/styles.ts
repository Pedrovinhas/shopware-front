import styled from "styled-components";

export const CardsDiv = styled.div`
    margin-top: 4.25rem;

    display: flex;
    flex-direction: column;
    gap: 24px;

    padding-left: 1.25rem;

    @media (max-width: 740px) {
        margin-top: 1.875rem;
    }
`

export const CardsNav = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    
    margin-right: 1.25rem;

    .mobile__heading {
        display: none;
    }

    @media (max-width: 740px) {
        .mobile__heading {
            display: flex;
        }

        .desktop__heading {
            display: none;
        }
    }

  
`

export const Cards = styled.div`

    display: flex;
    gap: 2.5rem;
    width: 100%;

    @media (max-width: 740px) {
        gap: 1rem;
    }
`