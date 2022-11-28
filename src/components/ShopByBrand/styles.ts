import styled from "styled-components";

export const BrandDiv = styled.div`

    display: flex;
    gap: 2.875rem;
    flex-direction: column;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 4.25rem;
    padding-bottom: 4.25rem;

    .mobile__txt {
        display: none;
    }

    @media (max-width: 1140px) {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        .mobile__txt {
            display: flex;
        }

        .desktop__txt {
            display: none;
        }
    }

`
export const BrandsContainer = styled.div`
   

    .desktop__brands {
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem;
    }

    .mobile__brands {
        display: none;
    }

    @media (max-width: 740px) {
        .mobile__brands {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            column-gap: 16px;
            row-gap: 24px;
        }

        .desktop__brands {
            display: none;
        }
    }
`