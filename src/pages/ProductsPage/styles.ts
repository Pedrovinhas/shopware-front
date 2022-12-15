import styled from "styled-components";

export const ColumnContainer = styled.section`

    margin-left: 1.25rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

`

export const AlignContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export const CategoriesContainer = styled.section`

    .mobile__categories {
        display: none;
    }

    @media (max-width: 1140px) {
        .desktop__categories {
            display: none;
        }

        .mobile__categories {
            display: flex;
            flex-direction: column;
        }
    }

`