import styled from "styled-components";

export const HandPickedContainer = styled.div`

    display: flex;
    gap: 2.5rem;
    flex-direction: column;

    background-color: ${props => props.theme.colors.primary};
    padding-left: 1.25rem;
    padding-top: 2rem;
    padding-bottom: 1rem;

    .mobile__heading {
        display: none;
    }


    @media (max-width: 740px) {
        gap: .875rem;
        padding-top: 1.125rem;
        .desktop__heading {
            display: none;
        }

        .mobile__heading {
            display: flex;
        }

    }
   

`
export const CollectionsContainer = styled.div`
    display: flex;
    gap: 2.5rem;

    flex-wrap: wrap;


    @media (max-width: 740px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;

        width: 328px;
    }
`